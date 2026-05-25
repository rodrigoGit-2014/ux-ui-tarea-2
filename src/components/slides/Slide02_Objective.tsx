import { motion } from 'framer-motion';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import { objectiveData } from '../../data/slidesData';

export const Slide02_Objective = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-8 gradient-health">
      <div className="max-w-5xl text-center relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-8"
        >
          <Target className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">
            Nuestro Objetivo
          </span>
        </motion.div>

        {/* Main objective text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-primary-700 leading-tight mb-12"
        >
          {objectiveData.text}
        </motion.h2>

        {/* Key concepts cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-primary-100/50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-3 mx-auto">
              <Heart className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Impacto Real
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Cada donación genera cambios tangibles
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-primary-100/50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-3 mx-auto">
              <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Verificable
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Transparencia total en cada paso
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-primary-100/50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-3 mx-auto">
              <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Centrado en Familias
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Apoyo directo donde más se necesita
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
