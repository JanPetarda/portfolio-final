// import React from "react";

// const TabButton = ({ active, selectTab, children }) => {
//     const buttonClasses = active ? 'text-white border-b border-purple-500' : "text-[#ADB7BE]"
//     return (
//         <button onClick={selectTab}>
//             <p className={`mr-3 font-semibold ${buttonClasses} hover:border-b hover:border-purple-500`}>

//                 {children}
//             <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
//             </p>
//         </button>
//     )
// }

// export default TabButton;




import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;