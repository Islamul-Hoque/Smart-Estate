// "use client";

// import { motion } from "framer-motion";
// import { Search, Sparkles, MapPin, Home, ArrowRight } from "lucide-react";

// const Hero = () => {
//     return (
//         <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20">
//             {/* Background Decorative Elements */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//                 <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]" />
//                 <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/10 rounded-full blur-[120px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                 {/* Badge */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-8"
//                 >
//                     <Sparkles size={16} />
//                     <span className="text-sm font-semibold tracking-wide uppercase">AI-Powered Real Estate Platform</span>
//                 </motion.div>

//                 {/* Main Heading */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
//                 >
//                     Find Your Dream Home <br />
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
//                         Smartly & Effortlessly
//                     </span>
//                 </motion.h1>

//                 {/* Subtext */}
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10"
//                 >
//                     Our AI analyzes thousands of listings to match you with the perfect property.
//                     Experience real-time insights and personalized recommendations.
//                 </motion.p>

//                 {/* Interactive Search Bar (AI Integration Focus) */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
//                 >
//                     <div className="flex flex-col md:flex-row items-center gap-2">
//                         <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 py-2">
//                             <MapPin className="text-blue-500 mr-3" size={20} />
//                             <input
//                                 type="text"
//                                 placeholder="Where do you want to live?"
//                                 className="w-full bg-transparent border-none focus:outline-none text-slate-700 dark:text-slate-200 text-sm py-2"
//                             />
//                         </div>
//                         <div className="flex-1 flex items-center px-4 w-full py-2">
//                             <Home className="text-blue-500 mr-3" size={20} />
//                             <select className="w-full bg-transparent border-none focus:outline-none text-slate-700 dark:text-slate-200 text-sm py-2 appearance-none">
//                                 <option>Property Type</option>
//                                 <option>Apartment</option>
//                                 <option>Villa</option>
//                                 <option>Office</option>
//                             </select>
//                         </div>
//                         <button className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 group">
//                             <Search size={20} />
//                             <span>Search Now</span>
//                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                         </button>
//                     </div>
//                 </motion.div>

//                 {/* Statistics/Social Proof Area (Flow to next section) */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1, delay: 0.6 }}
//                     className="mt-12 flex justify-center items-center space-x-8 text-slate-400 dark:text-slate-600"
//                 >
//                     <div className="text-center">
//                         <span className="block text-2xl font-bold text-slate-700 dark:text-slate-300">12k+</span>
//                         <span className="text-xs uppercase tracking-widest">Properties</span>
//                     </div>
//                     <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />
//                     <div className="text-center">
//                         <span className="block text-2xl font-bold text-slate-700 dark:text-slate-300">8k+</span>
//                         <span className="text-xs uppercase tracking-widest">Happy Clients</span>
//                     </div>
//                     <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />
//                     <div className="text-center">
//                         <span className="block text-2xl font-bold text-slate-700 dark:text-slate-300">4.9</span>
//                         <span className="text-xs uppercase tracking-widest">Rating</span>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;



"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, MapPin, ArrowRight, Star, Building, ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    title: "Luxury Modern Villa",
    price: "$2,450,000",
    location: "Miami, Florida",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    title: "Eco-Friendly Penthouse",
    price: "$1,850,000",
    location: "Austin, Texas",
  },
  {
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Cozy Lakeview Estate",
    price: "$980,000",
    location: "Seattle, Washington",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    zIndex: 0,
  }),
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, [slideNext]);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-6">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">AI-Driven Real Estate</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                Perfect Sanctuary
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of property searching. Our AI analyzes market trends 
              to match you with homes that fit your lifestyle perfectly.
            </p>

            {/* AI Search Box */}
            <div className="relative max-w-xl mx-auto lg:mx-0 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex flex-col sm:flex-row items-center bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                <div className="flex-1 flex items-center px-4 py-3 w-full">
                  <Search className="text-blue-500 mr-3" size={20} />
                  <input 
                    type="text" 
                    placeholder="AI: 'Modern villa with pool'..." 
                    className="w-full bg-transparent border-none focus:outline-none text-slate-700 dark:text-slate-200 text-sm"
                  />
                </div>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Ratings & User Avatars */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100",
                ].map((imgUrl, index) => (
                  <div key={index} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white dark:border-slate-950 shadow-lg overflow-hidden">
                    <img src={imgUrl} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                  <span className="ml-2 font-black text-slate-900 dark:text-slate-200">4.9/5</span>
                </div>
                <p className="text-slate-500 text-xs font-medium">Rated by 2,000+ Verified Homeowners</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Fixed Responsive Draggable Slider */}
          <div className="relative order-1 lg:order-2 w-full max-w-[550px] lg:max-w-none mx-auto h-[350px] md:h-[500px] lg:h-[550px] group">
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 cursor-grab active:cursor-grabbing">
              
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -50) slideNext();
                    else if (swipe > 50) slidePrev();
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={sliderData[currentSlide].url} 
                    alt={sliderData[currentSlide].title} 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Info Panel */}
                  <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 right-4 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl md:rounded-3xl text-white">
                    <div className="flex justify-between items-end">
                      <div className="max-w-[65%]">
                        <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-blue-400 mb-1">Featured Listing</p>
                        <h3 className="text-lg md:text-2xl font-black truncate">{sliderData[currentSlide].title}</h3>
                        <p className="text-[10px] md:text-xs opacity-70 flex items-center gap-1 mt-1 truncate">
                          <MapPin size={12} /> {sliderData[currentSlide].location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg md:text-2xl font-black text-white">{sliderData[currentSlide].price}</p>
                        <button className="hidden sm:block text-[10px] bg-blue-600 text-white px-4 py-2 rounded-full font-bold mt-2 hover:bg-white hover:text-blue-600 transition-colors uppercase tracking-tighter">View Details</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Fixed Navigation Icons */}
              <button 
                onClick={slidePrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-20"
              >
                <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={slideNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-20"
              >
                <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Fixed Floating Stats Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white dark:bg-slate-900 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-30 flex items-center gap-2 md:gap-4"
            >
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-lg md:rounded-xl">
                <Building size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-sm md:text-lg font-black text-slate-900 dark:text-white leading-none">1,200+</p>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-bold tracking-tighter mt-1">Ready Listings</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );


  
};

export default Hero;