import {
  buttonBoxAnim,
  outerCircleAnim,
  transparentCircleAnim,
} from '@/lib/variants';
import { Box, Circle, Text } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MotionCircle, MotionBox, MotionText } from './Motion';
import { useAnimation } from 'framer-motion';

interface IProps {
  duration: number;
  onPlaying: boolean;
  onSetPlaying: Dispatch<SetStateAction<boolean>>;
  onProgress: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  };
  onPlayerMouseEnter: boolean;
}

const PlayerButton = (props: IProps) => {
  const {
    duration,
    onPlaying,
    onSetPlaying,
    onProgress,
    onPlayerMouseEnter,
  } = props;

  const componentControls = useAnimation();
  const itemControls = useAnimation();
  const [trackingHandDeg, setTrackingHandDeg] = useState<number>(90);
  const [onUserPaused, setOnUserPaused] = useState<boolean>(false);

  const handlePlay = () => {
    onSetPlaying((p) => (!p ? true : false));
    if (onPlaying) {
      setOnUserPaused(true);
      itemControls.start('init');
    } else setOnUserPaused(false);
  };

  useEffect(() => {
    if (!onPlayerMouseEnter && onPlaying) {
      componentControls.start('hide');
    } else componentControls.start('show');

    return componentControls.stop;
  }, [onPlayerMouseEnter]);

  useEffect(() => {
    const degPerSecond = onProgress.playedSeconds / duration;
    if (onProgress.playedSeconds) {
      const totalDeg = degPerSecond * 360;
      setTrackingHandDeg(totalDeg + 88.5);
    }
    return () => setTrackingHandDeg(0);
  }, [onProgress.playedSeconds]);

  return (
    <>
      <MotionBox
        position="absolute"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        variants={buttonBoxAnim}
        whileHover="hover"
        animate={componentControls}
        onClick={handlePlay}
      >
        <Box
          opacity={onUserPaused ? 1 : 0}
          position="absolute"
          right="50%"
          width="42px"
          height="0.15em"
          background="brand"
          transform={
            !onPlaying ? `rotate(${trackingHandDeg}deg)` : 'rotate(90deg)'
          }
          transition="all 0.45s ease-out"
          transformOrigin="100%"
        />
        <CircularProgress
          opacity={!onPlaying ? '1' : '0'}
          trackColor="transparent"
          color="brand"
          min={0}
          max={duration}
          value={onUserPaused ? onProgress.playedSeconds : 0}
          thickness="3px"
          size="100px"
          transition="all 0.5s ease-out"
        />
        <MotionCircle
          variants={outerCircleAnim}
          zIndex="3"
          position="absolute"
          background="transparent"
          border="3px solid"
          borderColor="brand"
          width="97.5px"
          height="97.5px"
          visibility={
            !onProgress.playedSeconds && !onPlaying ? 'visible' : 'hidden'
          }
        />
        <Circle
          position="absolute"
          width="35px"
          height="35px"
          background="brand"
          color="white"
          fontSize="0.35rem"
          zIndex="3"
        >
          {!onPlaying ? '►' : '❚❚'}
        </Circle>
        <MotionCircle
          variants={transparentCircleAnim}
          position="absolute"
          background="brand"
          opacity={0}
          width="35px"
          height="35px"
          zIndex="2"
          //      animate={itemControls}
        />
      </MotionBox>
      <Box
        cursor="pointer"
        mt={{ base: '25%', '2xl': '14%' }}
        position="absolute"
        overflow="hidden"
      >
        <Text
          color="white"
          fontSize="0.85em"
          letterSpacing="1.25px"
          transform={!onUserPaused ? 'translateY(25px)' : 'translateY(0)'}
          transition="all 0.2s ease-out"
          onClick={handlePlay}
        >
          RESUME
        </Text>
      </Box>
    </>
  );
};

export default PlayerButton;
