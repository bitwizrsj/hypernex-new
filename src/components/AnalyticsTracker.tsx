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
      // Don't track admin pages or API routes
      if (pathname.startsWith('/admin') || pathname.startsWith('/api')) return;

      const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      
      const { error } = await supabase.from('page_views').insert({
        path: fullPath,
        referrer: document.referrer || 'Direct',
        user_agent: navigator.userAgent
      });

      if (error) {
        console.error('Supabase Analytics Error:', error.message, error.details);
      }
    };

    trackPageView();
  }, [pathname, searchParams]);

  return null;
}

export const trackClick = async (buttonId: string, path: string) => {
  const supabase = createClient();
  const { error } = await supabase.from('button_clicks').insert({
    button_id: buttonId,
    page_path: path
  });
  
  if (error) {
    console.error('Supabase Click Tracking Error:', error.message);
  }
};
