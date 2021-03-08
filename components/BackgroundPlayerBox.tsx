import { upperBoxAnim, upperBoxAnimDesktop } from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

const BackgroundPlayerBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <MotionBox
      gridRow={{ base: '1/20', xl: '1/15' }}
      gridColumn="19/-1"
      bg="white"
      minHeight="100%"
      zIndex="2"
      variants={isDesktopOrLaptop ? upperBoxAnimDesktop : upperBoxAnim}
      initial="init"
      animate="final"
    />
  );
};

export default BackgroundPlayerBox;