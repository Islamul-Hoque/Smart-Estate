
// import CategoryExplorer from '@/components/Home/Category/Category';
// import Banner from '../../components/Home/Banner/Banner'
// import Features from '@/components/Home/Features/Features';
// import Faq from '@/components/Home/FAQ/Faq';
// export default function Home() {
//   return (
//     <div>
//       <Banner />
//       <CategoryExplorer />
//       <Features />
//       <Faq />
//     </div>
//   );
// }


import CategoryExplorer from '@/components/Home/Category/Category';
import Banner from '../../components/Home/Banner/Banner'
import Features from '@/components/Home/Features/Features';
import Faq from '@/components/Home/FAQ/Faq';
import FeaturedProperties from '@/components/Home/Properties/FeaturedProperties';

// import Testimonials from '@/components/Home/Reviews/Testimonials'; 
// import StatsCounter from '@/components/Home/Stats/StatsCounter'; 

export default function Home() {
  return (
    <div className="space-y-20"> 
      <Banner />
      <FeaturedProperties /> 
      <CategoryExplorer />
      {/* <StatsCounter />      */}
      <Features />
      {/* <Testimonials />     */}
      <Faq />
    </div>
  );
}