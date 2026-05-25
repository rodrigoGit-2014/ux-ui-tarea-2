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
}: TensionSplitCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full flex flex-col">
      {/* Title */}
      <div className="text-center py-4 border-b border-neutral-200 bg-neutral-50">
        <h3 className="text-lg font-bold text-neutral-700">
          {title}
        </h3>
      </div>

      {/* Split View - Vertical */}
      <div className="flex-1 flex flex-col">
        {/* Top Side */}
        <div className="p-4 bg-gradient-to-b from-rose-50 to-white border-b border-neutral-200 flex-1">
          <div className="flex items-start space-x-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></div>
            <h4 className="text-base font-bold text-rose-700">
              {side1.label}
            </h4>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {side1.description}
          </p>
        </div>

        {/* Bottom Side */}
        <div className="p-4 bg-gradient-to-t from-cyan-50 to-white flex-1">
          <div className="flex items-start space-x-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
            <h4 className="text-base font-bold text-cyan-700">
              {side2.label}
            </h4>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {side2.description}
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="bg-neutral-50 px-4 py-3 border-t border-neutral-200">
        <p className="text-xs text-primary-700 font-semibold italic text-center leading-tight">
          {question}
        </p>
      </div>
    </div>
  );
};
