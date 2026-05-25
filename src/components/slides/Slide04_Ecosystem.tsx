import { SlideTitle } from '../ui/SlideTitle';
import { StrategyMapCell } from '../ui/StrategyMapCell';
import { strategicMapData } from '../../data/slidesData';

export const Slide04_Ecosystem = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-6 gradient-health overflow-auto">
      <div className="w-full max-w-[95vw]">
        <div className="text-center mb-4">
          <SlideTitle delay={0}>{strategicMapData.title}</SlideTitle>
          <p className="text-sm text-neutral-600 -mt-6">
            {strategicMapData.subtitle}
          </p>
        </div>

        {/* Strategy Map Table */}
        <div className="bg-white rounded-xl shadow-card p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left w-32 border-b-2 border-neutral-200">
                  <span className="text-xs font-bold text-primary-700">ACTORES</span>
                </th>
                {strategicMapData.columns.map((column) => (
                  <th key={column.id} className="p-2 border-b-2 border-neutral-200">
                    <span className="text-xs font-bold text-neutral-700 block text-center">
                      {column.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {strategicMapData.rows.map((row, rowIndex) => (
                <tr key={row.id} className="border-b border-neutral-100">
                  <td className="p-2 align-top bg-neutral-50">
                    <div className="sticky left-0">
                      <span className="text-xs font-bold text-neutral-700 block">
                        {row.label}
                      </span>
                    </div>
                  </td>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cell.id} className="p-2 align-top">
                      <StrategyMapCell
                        title={cell.title}
                        description={cell.description}
                        icon={cell.icon}
                        color={row.color}
                        delay={0.05 * (rowIndex * 6 + cellIndex)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-3 text-center">
          <p className="text-xs text-neutral-500">
            <span className="font-semibold text-primary-600">ENFOQUE GENERAL:</span> Confianza • Transparencia • Empatía • Eficiencia
          </p>
        </div>
      </div>
    </div>
  );
};
