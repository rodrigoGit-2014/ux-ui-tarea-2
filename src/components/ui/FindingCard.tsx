import { motion } from 'framer-motion';

interface FindingCardProps {
  text: string;
  emphasis?: string;
  delay?: number;
}

export const FindingCard = ({ text, emphasis, delay = 0 }: FindingCardProps) => {
  // If emphasis is provided, split the text to highlight it
  const renderText = () => {
    if (!emphasis) {
      return <span>{text}</span>;
    }

    const parts = text.split(emphasis);
    return (
      <>
        {parts[0]}
        <span className="text-primary-600 font-bold">{emphasis}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
        {renderText()}
      </p>
    </motion.div>
  );
};
