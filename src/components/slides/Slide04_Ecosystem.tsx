import { SlideTitle } from '../ui/SlideTitle';
import { EcosystemNode } from '../ui/EcosystemNode';
import { ecosystemData } from '../../data/slidesData';

export const Slide04_Ecosystem = () => {
  const centerNode = ecosystemData.find((actor) => actor.isCenter);
  const otherNodes = ecosystemData.filter((actor) => !actor.isCenter);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 bg-neutral-50">
      <SlideTitle>Red de Valor Estratégica</SlideTitle>

      {/* Ecosystem Visualization */}
      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center">
        <div className="relative w-full aspect-square max-h-[600px] bg-white rounded-3xl shadow-card border border-neutral-200">

          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Draw all connections */}
            {centerNode && otherNodes.map((node) => (
              <g key={`line-${node.id}`}>
                {/* Shadow for depth */}
                <line
                  x1={`${centerNode.position.x}%`}
                  y1={`${centerNode.position.y}%`}
                  x2={`${node.position.x}%`}
                  y2={`${node.position.y}%`}
                  stroke="#93C5FD"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                {/* Main line */}
                <line
                  x1={`${centerNode.position.x}%`}
                  y1={`${centerNode.position.y}%`}
                  x2={`${node.position.x}%`}
                  y2={`${node.position.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0">
            {/* Center Node */}
            {centerNode && (
              <EcosystemNode
                id={centerNode.id}
                label={centerNode.label}
                position={centerNode.position}
                isCenter={true}
                delay={0}
              />
            )}

            {/* Other Nodes */}
            {otherNodes.map((actor) => (
              <EcosystemNode
                key={actor.id}
                id={actor.id}
                label={actor.label}
                position={actor.position}
                delay={0}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-neutral-500 text-center mt-4">
        La Plataforma ONG actúa como garante central de confianza
      </p>
    </div>
  );
};
