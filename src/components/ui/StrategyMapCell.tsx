import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface StrategyMapCellProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    title: 'text-blue-900'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-600',
    title: 'text-green-900'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'text-orange-600',
    title: 'text-orange-900'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    title: 'text-purple-900'
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    icon: 'text-cyan-600',
    title: 'text-cyan-900'
  },
  pink: {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    icon: 'text-pink-600',
    title: 'text-pink-900'
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'text-amber-600',
    title: 'text-amber-900'
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: 'text-violet-600',
    title: 'text-violet-900'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    icon: 'text-rose-600',
    title: 'text-rose-900'
  }
};

export const StrategyMapCell = ({ title, description, icon, color, delay = 0 }: StrategyMapCellProps) => {
  const IconComponent = (Icons as any)[icon] || Icons.Circle;
  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`${colors.bg} ${colors.border} border rounded-lg p-3 h-full flex flex-col items-start gap-2`}
    >
      <IconComponent className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
      <div>
        <h4 className={`text-xs font-bold ${colors.title} leading-tight mb-1`}>
          {title}
        </h4>
        <p className="text-[10px] text-neutral-600 leading-tight">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
