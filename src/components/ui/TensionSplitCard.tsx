import { motion } from 'framer-motion';

interface TensionSplitCardProps {
  title: string;
  side1: { label: string; description: string };
  side2: { label: string; description: string };
  question: string;
  delay?: number;
}

export const TensionSplitCard = ({
  title,
  side1,
  side2,
  question,
  delay = 0,
}: TensionSplitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-card overflow-hidden"
    >
      {/* Title */}
      <div className="text-center py-6 border-b border-neutral-200">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-700">
          {title}
        </h3>
      </div>

      {/* Split View */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="p-8 bg-gradient-to-br from-rose-50 to-white border-r border-neutral-200"
        >
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
            <h4 className="text-xl font-bold text-rose-700">
              {side1.label}
            </h4>
          </div>
          <p className="text-neutral-600 leading-relaxed">
            {side1.description}
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
          className="p-8 bg-gradient-to-bl from-cyan-50 to-white"
        >
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
            <h4 className="text-xl font-bold text-cyan-700">
              {side2.label}
            </h4>
          </div>
          <p className="text-neutral-600 leading-relaxed">
            {side2.description}
          </p>
        </motion.div>
      </div>

      {/* VS Divider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
        <div className="w-12 h-12 rounded-full bg-neutral-700 text-white flex items-center justify-center font-bold text-sm shadow-lg">
          VS
        </div>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="bg-neutral-50 p-6 border-t border-neutral-200"
      >
        <p className="text-center text-lg text-primary-700 font-semibold italic">
          {question}
        </p>
      </motion.div>
    </motion.div>
  );
};
