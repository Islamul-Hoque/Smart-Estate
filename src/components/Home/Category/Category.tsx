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


"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Luxury Villa", img: "https://cdn-icons-png.flaticon.com/512/619/619153.png" },
  { name: "Apartment", img: "https://cdn-icons-png.flaticon.com/512/2590/2590610.png" },
  { name: "Family Home", img: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
  { name: "Office Space", img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
  { name: "Modern Land", img: "https://cdn-icons-png.flaticon.com/512/2913/2913520.png" },
  { name: "Townhouse", img: "https://cdn-icons-png.flaticon.com/512/1239/1239525.png" },
  { name: "Studio Flat", img: "https://cdn-icons-png.flaticon.com/512/2311/2311409.png" }, // নতুন
  { name: "Beach House", img: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png" }, // নতুন
];

const CategoryExplorer = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-slate-950 overflow-hidden min-h-[900px] flex items-center justify-center">
      
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-dashed border-slate-200 dark:border-slate-800 rounded-full animate-[spin_80s_linear_infinite]" />
        <div className="absolute w-[550px] h-[550px] md:w-[750px] md:h-[750px] border border-slate-100 dark:border-slate-900 rounded-full" />
      </div>

      <div className="relative w-full max-w-6xl h-[700px] flex items-center justify-center">
        
        {/* --- Central Core --- */}
        <div className="relative flex items-center justify-center z-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-64 h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl -z-10" 
          />
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="relative w-44 h-44 md:w-60 md:h-60 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex flex-col items-center justify-center text-white text-center p-8 shadow-[0_20px_50px_rgba(37,99,235,0.4)] border-4 border-white/20 backdrop-blur-sm"
          >
            <div className="absolute top-6 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping" />
            <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tighter uppercase italic">
              Explore <br /> 
              <span className="text-blue-100">Types</span>
            </h2>
            <div className="w-10 h-1 bg-white/30 my-3 rounded-full" />
            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100/80">
              Smart Estate
            </p>
          </motion.div>
        </div>

        {/* --- Orbiting Items --- */}
        {categories.map((cat, i) => {
          // আইটেম বাড়লে অটোমেটিক এঙ্গেল ভাগ করে নেবে
          const angle = (i * (360 / categories.length)) - 90; 
          // আইটেম বেশি হলে রেডিয়াস একটু বাড়িয়ে দিলাম (Desktop: 300px)
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 310; 

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ 
                opacity: 1, 
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius 
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.8, type: "spring", bounce: 0.3 }}
              className="absolute z-10 group"
            >
              <div className="relative flex flex-col items-center">
                
                {/* Item Circle - আইটেম বেশি বলে সাইজ সামান্য ছোট (md:w-28) */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-16 h-16 md:w-28 md:h-28 bg-white dark:bg-slate-900 rounded-full shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center p-4 md:p-7 cursor-pointer transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-blue-500/20"
                >
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-contain" 
                  />
                </motion.div>
                
                {/* Label */}
                <div className="mt-3 text-center">
                  <span className="block text-[10px] md:text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {cat.name}
                  </span>
                </div>

                {/* Connecting Line */}
                <svg className="absolute top-1/2 left-1/2 -z-10 w-[300px] h-[300px] pointer-events-none overflow-visible">
                   <motion.line 
                     x1="0" y1="0" 
                     x2={Math.cos((angle * Math.PI) / 180) * -radius * 0.45} 
                     y2={Math.sin((angle * Math.PI) / 180) * -radius * 0.45}
                     stroke="currentColor"
                     strokeWidth="1"
                     className="text-blue-100 dark:text-blue-900/30"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     viewport={{ once: false }}
                     transition={{ duration: 1.2, delay: 0.2 }}
                   />
                </svg>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default CategoryExplorer;