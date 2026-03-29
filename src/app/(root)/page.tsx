
import CategoryExplorer from '@/components/Home/Category/Category';
import Banner from '../../components/Home/Banner/Banner'
import Features from '@/components/Home/Features/Features';
import Faq from '@/components/Home/FAQ/Faq';
export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryExplorer />
      <Features />
      <Faq />
    </div>
  );
}
