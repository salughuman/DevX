import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function useFollowPointer(ref) {
  const [point, setPoint] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return point;
}

export default function Arrow() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="circle w-6 h-6 rounded-full bg-red-800 z-50"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 5,
        stiffness: 20,
        restDelta: 0.0001,
      }}
    />
  );
}