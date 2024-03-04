import { motion, AnimatePresence } from "framer-motion";

import "./Modal.css";

function ecommerce() {

  return (
    <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{
                transform: ["translatex(100px)", "translatex(0px)"],
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
            }}
            exit={{
                opacity: 0,
            }}
        >
            <p>Earth says hello!</p>
        </motion.div>
  )
}

export default ecommerce 
