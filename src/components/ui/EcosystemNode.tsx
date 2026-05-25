import { Building2, Users, Heart, Scale, Palette, Cpu, LucideIcon } from 'lucide-react';

interface EcosystemNodeProps {
  id: string;
  label: string;
  position: { x: number; y: number };
  isCenter?: boolean;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  plataforma: Building2,
  familias: Users,
  donantes: Heart,
  finanzas: Scale,
  ux: Palette,
  ia: Cpu,
};

export const EcosystemNode = ({ id, label, position, isCenter = false }: EcosystemNodeProps) => {
  const IconComponent = iconMap[id] || Building2;
  const size = isCenter ? 'w-36 h-36' : 'w-28 h-28';
  const iconSize = isCenter ? 'w-10 h-10' : 'w-7 h-7';
  const fontSize = isCenter ? 'text-base' : 'text-sm';

  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`${size} rounded-full ${
          isCenter
            ? 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl'
            : 'bg-white shadow-lg border-4 border-primary-300'
        } flex flex-col items-center justify-center p-3`}
      >
        {/* Icon */}
        <div className={`${isCenter ? 'mb-2' : 'mb-1.5'}`}>
          <IconComponent
            className={`${iconSize} ${
              isCenter ? 'text-white' : 'text-primary-600'
            }`}
            strokeWidth={2.5}
          />
        </div>

        {/* Label */}
        <span
          className={`${fontSize} font-bold text-center leading-tight ${
            isCenter ? 'text-white' : 'text-primary-700'
          } px-1`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
