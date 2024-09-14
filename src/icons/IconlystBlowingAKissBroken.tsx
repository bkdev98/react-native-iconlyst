import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlowingAKissBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 12a9 9 0 0 0 12.762 8.179M20.822 9.248a9.003 9.003 0 0 0-16.75-1.012M8.368 9.808c.264-.345.654-.56 1.087-.56s.824.215 1.088.56M13.836 9.808c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M12.188 16.663c.682-.21 1.12-.531 1.12-.892 0-.379-.767-.805-.767-.805s.766-.407.766-.766c0-.31-.421-.587-1.083-.77M17.518 17.472s-1.128-2.288-.625-3.879c.313-1.008 1.281-1.731 2.34-1.404.554.175.99.605 1.174 1.156a1.8 1.8 0 0 1 1.491.71c.67.883.319 2.04-.521 2.678-.479.363-1.104.56-1.71.666"
    />
  </Svg>
);
export default IconlystBlowingAKissBroken;
