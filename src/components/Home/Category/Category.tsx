// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const categories = [
//   {
//     name: "Modern Villa",
//     count: "240+ Properties",
//     // নিচের লিঙ্কে আপনার পছন্দের Flaticon Image URL বসাবেন
//     img: "https://cdn-icons-png.flaticon.com/512/619/619153.png", 
//     bgColor: "bg-blue-50 dark:bg-blue-900/20",
//   },
//   {
//     name: "Apartment",
//     count: "1.2k+ Properties",
//     img: "https://cdn-icons-png.flaticon.com/512/2590/2590610.png",
//     bgColor: "bg-purple-50 dark:bg-purple-900/20",
//   },
//   {
//     name: "Family House",
//     count: "850+ Properties",
//     img: "https://cdn-icons-png.flaticon.com/512/619/619034.png",
//     bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
//   },
//   {
//     name: "Townhouse",
//     count: "150+ Properties",
//     img: "https://cdn-icons-png.flaticon.com/512/1239/1239525.png",
//     bgColor: "bg-orange-50 dark:bg-orange-900/20",
//   },
//   {
//     name: "Office Space",
//     count: "320+ Properties",
//     img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//     bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
//   },
//   {
//     name: "Land / Plot",
//     count: "95+ Properties",
//     img: "https://cdn-icons-png.flaticon.com/512/2913/2913520.png",
//     bgColor: "bg-lime-50 dark:bg-lime-900/20",
//   },
// ];

// const CategoryExplorer = () => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
//               Explore by <span className="text-blue-600">Property Type</span>
//             </h2>
//             <p className="text-slate-600 dark:text-slate-400 text-lg">
//               Find your dream space by browsing through our curated categories.
//             </p>
//           </div>
          
//           <button className="group flex items-center gap-2 text-blue-600 font-bold">
//             View All Categories 
//             <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//           </button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="group cursor-pointer text-center"
//             >
//               <div className={`aspect-square ${category.bgColor} rounded-[2.5rem] flex items-center justify-center mb-5 p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10`}>
//                 <img 
//                   src={category.img} 
//                   alt={category.name} 
//                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
              
//               <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
//                 {category.name}
//               </h3>
//               <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
//                 {category.count}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryExplorer;

