// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//     { id: "01", question: "How do I start searching for a property?", answer: "Simply use our advanced search bar on the homepage. You can filter by location, price range, and property type to find your perfect match instantly." },
//     { id: "02", question: "Is there any service fee for buyers?", answer: "Our platform is completely free for property seekers. We only charge a small commission from sellers once a deal is successfully closed." },
//     { id: "03", question: "Can I book a virtual 3D tour?", answer: "Yes, most of our premium listings include a 3D virtual tour option. Look for the badge on the property details page." },
//     { id: "04", question: "How do I contact an agent directly?", answer: "Each property listing has an inquiry button. Clicking it will allow you to send a direct message or call the assigned agent." }
// ];


// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1,
//         },
//     },
// };

// const itemVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.3,
//             ease: "easeOut"
//         }
//     }
// };

// const Faq = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(0);

//     return (
//         <section className="py-24 px-6 lg:px-12 bg-[#F8FAFC] overflow-hidden">
//             <div className="max-w-[1400px] mx-auto">

//                 {/* --- Heading --- */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false }}
//                     className="text-center mb-20 space-y-4"
//                 >
//                     <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900">
//                         Frequently Asked <br />
//                         <span className="text-blue-600">Questions</span>
//                     </h2>
//                     <p className="text-slate-400 font-medium italic max-w-2xl mx-auto text-sm">
//                         "Find quick answers to your most common inquiries instantly."
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                     {/* --- Left Side: Illustration --- */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: false }}
//                         className="lg:col-span-5"
//                     >
//                         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm aspect-square flex items-center justify-center overflow-hidden">
//                             <motion.img
//                                 animate={{ y: [0, -10, 0] }}
//                                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                                 src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg"
//                                 alt="FAQ"
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>
//                     </motion.div>

//                     {/* --- Right Side: Staggered Fast Scroll Animation --- */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false, amount: 0.1 }} 
//                         variants={containerVariants}
//                         className="lg:col-span-7 space-y-4"
//                     >
//                         {faqs.map((faq, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariants}
//                                 className={`group border rounded-[2.5rem] transition-all duration-300 ${openIndex === index
//                                         ? "border-blue-600 bg-white shadow-xl shadow-blue-50"
//                                         : "border-slate-200 bg-transparent hover:border-slate-300"
//                                     }`}
//                             >
//                                 <button
//                                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                                     className="w-full flex items-center justify-between p-8 text-left"
//                                 >
//                                     <div className="flex items-center gap-6">
//                                         <span className={`text-[10px] font-black italic ${openIndex === index ? "text-blue-600" : "text-slate-300"}`}>
//                                             {faq.id}
//                                         </span>
//                                         <span className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 leading-tight">
//                                             {faq.question}
//                                         </span>
//                                     </div>
//                                     <div className={`p-2 rounded-xl transition-all ${openIndex === index ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
//                                         {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
//                                     </div>
//                                 </button>

//                                 <AnimatePresence>
//                                     {openIndex === index && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.2 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <div className="px-8 pb-8 ml-14 text-slate-500 text-[11px] font-medium leading-relaxed italic border-t border-slate-50 pt-6">
//                                                 {faq.answer}
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Faq;

'use client'
import React, { useState } from 'react';

const ImageAccordion = () => {
  // প্রাথমিকভাবে প্রথম ছবিটি (id: 1) বড় থাকবে
  const [activeId, setActiveId] = useState(1);

  const cards = [
    {
      id: 1,
      title: 'Snowy Forest Road',
      description: 'A quiet winter scene with snow-covered trees.',
      img: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Golden Autumn Trees',
      description: 'The vibrant colors of fall in a serene forest.',
      img: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Emerald Green Lake',
      description: 'Crystal clear water surrounded by tall mountains.',
      img: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Misty Mountain Peek',
      description: 'A deep foggy valley among towering forest peaks.',
      img: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Purple Sunset Beach',
      description: 'Warm light fading over a tranquil shoreline.',
      img: 'https://images.pexels.com/photos/2042079/pexels-photo-2042079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="w-full h-screen bg-[#111] p-12 flex flex-col justify-center items-center">
      <h2 className="text-white text-3xl font-bold mb-10">Expandable Image Gallery</h2>
      
      <div className="flex w-full h-[600px] gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-in-out ${
              activeId === card.id 
              ? 'flex-[5] shadow-2xl scale-100' 
              : 'flex-[0.8] scale-95 hover:flex-[1.2]' 
            }`}
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
        
            <div
              className={`absolute bottom-0 left-0 w-full p-8 text-white transition-opacity duration-500 ${
                activeId === card.id ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              }}
            >
              <h3 className="text-3xl font-extrabold uppercase tracking-wider">{card.title}</h3>
              <p className="mt-2 text-lg text-gray-200">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;



//https://www.youtube.com/watch?v=C_kVSFaYmeg