import React, {useEffect, useRef} from 'react';
import anime from 'animejs';

const Hexagon = ({delay}) => {
  let polygon = useRef(null);

  useEffect(() => {
    anime({
      targets: polygon, 
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96', 
      easing: 'easeInOutExpo',
      delay: delay
    });
  }, [delay]);

  return (
    <svg width="80" height="80" viewBox="0 0 128 128" fill='teal'>
      <polygon
        ref={$el => polygon = $el}
        points="64 69.32640881115918 8.574 99.95374603698389 62.811488135344895 67.26741464989624 64 3.9537460369838824 65.1885118646551 67.26741464989624 119.426 99.95374603698389 ">
      </polygon>
    </svg>
  );
};

export default Hexagon;
