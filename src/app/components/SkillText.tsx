"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">
            Think better
          </h1>
        </motion.div>
       
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[24px] text-base font-semibold  w-11/12 text-gray-300 mb-10 mt-[10px] text-center'
        >
            Making websites with front and backend technologies
        </motion.div>
    </div>
  )
}

export default SkillText