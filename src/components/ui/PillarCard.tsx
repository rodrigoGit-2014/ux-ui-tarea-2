import { motion } from 'framer-motion';
import { Shield, Eye, FileCheck, Cpu, Package, Heart, LucideIcon } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
  index?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Eye,
  FileCheck,
  Cpu,
  Package,
  Heart,
};

// Color themes for each pillar
const colorThemes = [
  {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    glow: 'group-hover:shadow-blue-500/50',
    number: 'bg-blue-500'
  },
  {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    glow: 'group-hover:shadow-cyan-500/50',
    number: 'bg-cyan-500'
  },
  {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    glow: 'group-hover:shadow-emerald-500/50',
    number: 'bg-emerald-500'
  },
  {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
    glow: 'group-hover:shadow-violet-500/50',
    number: 'bg-violet-500'
  },
  {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    glow: 'group-hover:shadow-amber-500/50',
    number: 'bg-amber-500'
  },
  {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600',
    glow: 'group-hover:shadow-rose-500/50',
    number: 'bg-rose-500'
  },
];

export const PillarCard = ({ title, description, icon, delay = 0, index = 0 }: PillarCardProps) => {
  const IconComponent = iconMap[icon] || Shield;
  const theme = colorThemes[index % colorThemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay
      }}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Number badge */}
      <div className={`absolute -top-2 -left-2 w-7 h-7 ${theme.number} rounded-full flex items-center justify-center shadow-md z-10`}>
        <span className="text-white font-bold text-xs">{index + 1}</span>
      </div>

      {/* Card */}
      <div className={`relative bg-white rounded-2xl p-5 shadow-card border-2 ${theme.border} transition-all duration-300 ${theme.glow} group-hover:shadow-elevated overflow-hidden h-full`}>

        {/* Decorative background gradient */}
        <div className={`absolute top-0 right-0 w-24 h-24 ${theme.bg} rounded-full blur-2xl opacity-50 -z-0`}></div>

        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon with gradient background */}
          <div className={`w-14 h-14 rounded-xl ${theme.iconBg} flex items-center justify-center mb-4 shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-neutral-900 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};
