import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const testimonials = [
  {
    quote: "Hypernex completely transformed our online presence. The new website not only looks amazing but also drives real results.",
    author: "Sarah Johnson",
    role: "Marketing Director, Lumen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "Their strategic approach and attention to detail set them apart. A true extension of our team.",
    author: "Michael Chen",
    role: "Co-founder, Kanba",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "Professional, reliable and incredibly talented. Hypernex delivered beyond our expectations.",
    author: "Emily Davis",
    role: "Head of Growth, Roam",
    avatar: "https://i.pravatar.cc/150?u=emily",
  },
];

async function seed() {
  console.log('Seeding testimonials...');
  
  const { data, error } = await supabase
    .from('testimonials')
    .upsert(testimonials);

  if (error) {
    console.error('Error seeding testimonials:', error);
  } else {
    console.log('Successfully seeded testimonials!');
  }
}

seed();
