import { HomeSections } from '@/components/home/sections';
import { homeAlternates } from '@/components/root-document';

export const metadata = { alternates: homeAlternates('fr') };

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HomeSections lang="fr" />
    </main>
  );
}
