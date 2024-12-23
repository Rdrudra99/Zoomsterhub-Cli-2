import { motion } from 'framer-motion'
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FeatureCardProps {
 icon: LucideIcon
 title: string
 description: string
}

const cardVariants = {
 hidden: { opacity: 0, y: 50 },
 visible: {
  opacity: 1,
  y: 0,
  transition: {
   type: "spring",
   stiffness: 300,
   damping: 20,
   duration: 0.5
  }
 }
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
 return (
  <motion.div
   className="flex flex-col py-10 relative group cursor-pointer"
   variants={cardVariants}
  >
   <motion.div
    className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
   />
   <motion.div
    className="mb-4 relative z-10 px-10"
    // whileHover={{ scale: 1.1, rotate: 360 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
   >
    <Icon className="text-lime-400" size={24} />
   </motion.div>
   <div className="text-lg font-bold mb-2 relative z-10 px-10">
    <motion.div
     className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-700"
     whileHover={{ backgroundColor: "#3B82F6", width: "4px" }}
     transition={{ duration: 0.2 }}
    />
    <motion.span
     className="inline-block text-lime-400"
     whileHover={{ x: 8 }}
     transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
     {title}
    </motion.span>
   </div>
   <motion.p
    className="text-sm text-white/50 max-w-xs mx-auto relative z-10 px-10"
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
   >
    {description}
   </motion.p>
  </motion.div>
 )
}

