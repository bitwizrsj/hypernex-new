"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const trackPageView = async () => {
      // Don't track admin pages
      if (pathname.startsWith('/admin')) return;

      const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      
      try {
        await supabase.from('page_views').insert({
          path: fullPath,
          referrer: document.referrer || 'Direct',
          user_agent: navigator.userAgent
        });
      } catch (err) {
        // Silently fail analytics
        console.error('Analytics failed:', err);
      }
    };

    trackPageView();
  }, [pathname, searchParams]);

  return null;
}

/**
 * Utility to track button clicks manually
 */
export const trackClick = async (buttonId: string, path: string) => {
  const supabase = createClient();
  try {
    await supabase.from('button_clicks').insert({
      button_id: buttonId,
      page_path: path
    });
  } catch (err) {
    console.error('Click tracking failed:', err);
  }
};
