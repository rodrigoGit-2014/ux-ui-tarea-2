import { motion } from 'framer-motion';
import { Shield, Eye, FileCheck, Cpu, Package, Heart, LucideIcon } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Eye,
  FileCheck,
  Cpu,
  Package,
  Heart,
};

export const PillarCard = ({ title, description, icon, delay = 0 }: PillarCardProps) => {
  const IconComponent = iconMap[icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
          <IconComponent className="w-8 h-8 text-primary-600" />
        </div>

        <h3 className="text-2xl font-bold text-neutral-700 mb-3">
          {title}
        </h3>

        <p className="text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
