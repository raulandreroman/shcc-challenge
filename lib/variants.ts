//BOX ANIMATIONS!

export const upperBoxAnimXl = {
  init: {},
  final: {
    marginLeft: '85%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const upperBoxAnimMd = {
  init: {},
  final: {
    marginLeft: '85%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const upperBoxAnimSm = {
  init: {},
  final: {
    marginLeft: '75%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const upperBoxAnim = {
  init: {},
  final: {
    marginLeft: '59%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const grayBoxAnim = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 0.55,
    width: '41%',
    marginLeft: '59%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const grayBoxAnimSm = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 0.55,
    width: '25%',
    marginLeft: '75%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const grayBoxAnimMd = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 0.55,
    width: '15%',
    marginLeft: '85%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const grayBoxAnimXl = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 0.55,
    visibility: 'visible',
    width: '15%',
    marginLeft: '85%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const bottomBoxAnim = {
  init: {},
  final: {
    marginLeft: '47%',
    width: '63%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const bottomBoxAnimSm = {
  init: {},
  final: {
    marginLeft: '100%',
    width: '30%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const bottomBoxAnimMd = {
  init: {},
  final: {
    marginLeft: '100%',
    width: '30%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

export const bottomBoxAnimXl = {
  init: {},
  final: {
    marginLeft: '100%',
    width: '30%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

//TEXT ANIMATIONS!

export const textAnim = {
  init: { y: 100, opacity: 0 },
  final: { y: 0, opacity: 1, transition: { delay: 0.55, duration: 1 } },
};

export const textStackAnim = {
  init: {},
  final: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 1.4,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

export const headingListAnim = {
  init: {},
  final: {
    visibility: 'visible',
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
      delay: 0.6,
      ease: 'easeOut',
      duration: 0.4,
    },
  },
};

export const bottomHeadingListAnim = {
  init: {},
  final: {
    visibility: 'visible',
    opacity: 1,
    transition: {
      delayChildren: 0.85,
      staggerChildren: 0.1,
      // duration: 2.2,
    },
  },
};

export const headingAnim = {
  init: {
    opacity: 0,
    y: 50,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      y: { duration: 1.25, type: 'tween', delay: 0.65, ease: 'easeOut' },
    },
  },
};

export const heartAnim = {
  init: { opacity: 0, y: 50 },
  final: {
    opacity: 1,
    y: 0,
    fill: [
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
      '#FF1A3E',
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
    ],
    x: [0, 10, 0, 0, 0, 10, 0, 10, 0],
    transition: {
      delay: 0.65,
      //     ease: 'easeOut',

      y: { duration: 1.25, type: 'tween', ease: 'easeOut' },
      fill: {
        repeat: 2,
        repeatType: 'loop',
        repeatDelay: 1.8,
        times: [0, 0.02, 0.04, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9],
        duration: 2.8,
        delay: 1.3,
        type: 'spring',
      },
      x: {
        repeat: 2,
        repeatType: 'loop',
        repeatDelay: 1.8,
        times: [0, 0.02, 0.04, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9],
        duration: 2.8,
        delay: 1.3,
        type: 'spring',
      },
    },
  },
};

//PLAYER ANIMATIONS

export const playerBoxAnim = {
  init: {
    opacity: 0,
    visibility: 'hidden',
    transition: {
      duration: 0.2,
    },
  },
  final: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 0.2,
    },
  },
};

export const buttonBoxAnim = {
  show: { scale: 1, opacity: 1 },
  tap: { opacity: 0.8 },
  hide: { scale: 0.4, opacity: 0, transition: { duration: 0.5 } },
};

export const outerCircleAnim = {
  init: {},
  hover: {
    scale: 0,
    transition: { duration: 0.6 },
  },
};

export const transparentCircleAnim = {
  init: {
    opacity: 0,
  },
  hover: {
    scale: 1.8,
    opacity: 0.5,
    transition: { duration: 0.6 },
  },
};
