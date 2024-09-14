import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallFootball1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 15-1-4 3-2 3 2-.47 1.831M14 15h-1.678M9.999 15l-1.294 2.203M13.998 15.01l1.414 2.193M11.998 6.955V5.5M9 11l-.723-.223M15 11l2.922-.947M4.723 6.72l1.378 3.333-3.058 2.765M9 3.5l3 2 3-2M19.3 6.72l-1.378 3.333 3.058 2.765M15.402 17.203l-1.015 3.46M19.518 16.965l-2.058.119M9.291 19.215l.436 1.448M4.596 16.965l4.116.238"
    />
  </Svg>
);
export default IconlystBallFootball1Broken;
