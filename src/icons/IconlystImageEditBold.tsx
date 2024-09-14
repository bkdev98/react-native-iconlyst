import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageEditBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.503 12.478-.99.103a3.118 3.118 0 0 1-3.439-3.184l.029-.996a4.3 4.3 0 0 1 1.15-2.814l1.693-1.825a.3.3 0 0 0-.22-.504H7.298c-3.162 0-5.287 2.219-5.287 5.52v6.123a.3.3 0 0 0 .476.243L5.7 12.813a4.93 4.93 0 0 1 6.189.288l2.83 2.539c.1.09.249.102.363.03a30 30 0 0 1 1.744-1.026c1.486-.8 2.732-.472 3.69.1.212.127.495-.017.495-.263V9.953a.3.3 0 0 0-.52-.204l-1.272 1.37a4.3 4.3 0 0 1-2.716 1.359"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.582 14.027c-1.142.828-3.76 2.682-4.39 3.128a.29.29 0 0 0-.124.267c.283 2.908 2.3 4.825 5.23 4.825h8.434c1.054 0 1.99-.25 2.772-.702.168-.097.182-.328.038-.458l-7.649-6.864a3.44 3.44 0 0 0-4.311-.197M20.797 16.834c-1.1-1.01-1.918-1.592-3.258-.87-.423.229-.812.455-1.151.66a.297.297 0 0 0-.043.476l3.307 2.967c.13.118.332.097.425-.052.503-.81 1.342-2.604.72-3.181M20.444 5.02l-3.609 3.89a1.06 1.06 0 0 1-.67.335l-.838.087.024-.84c.007-.258.108-.505.284-.695l3.61-3.89a.166.166 0 0 1 .236-.01l.954.884a.17.17 0 0 1 .01.24m1.011-1.339-.954-.884a1.67 1.67 0 0 0-2.356.09l-3.609 3.89a2.57 2.57 0 0 0-.685 1.674l-.028.992a1.366 1.366 0 0 0 1.509 1.397l.988-.103a2.57 2.57 0 0 0 1.615-.807l3.61-3.89a1.67 1.67 0 0 0-.09-2.359"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageEditBold;
