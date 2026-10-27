import { redirect } from 'next/navigation';

// The About page's personal project content now lives on /projects.
// The original page markup is preserved in src/components/About.tsx, which is
// intentionally left in place and unmodified pending review.
export default function AboutPage() {
  redirect('/projects');
}
