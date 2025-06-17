'use client';

import { motion } from 'framer-motion';

const MembershipHeader = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
    

      {/* Text Content */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-6xl font-bold text-center text-white leading-tight">
            Membership Benefits
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl text-center">
            Our membership comes with the promise of endless creativity and dedicated support.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipHeader;