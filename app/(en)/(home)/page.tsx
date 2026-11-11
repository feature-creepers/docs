import { HomeSections } from '@/components/home/sections';
import { homeAlternates } from '@/components/root-document';

export const metadata = { alternates: homeAlternates('en') };

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HomeSections lang="en" />
    </main>
  );
}
