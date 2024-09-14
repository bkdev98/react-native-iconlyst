import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentChartsLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.544 21.118a3.754 3.754 0 0 1-3.67-3.835V6.776a3.746 3.746 0 0 1 3.76-3.657h5.652c.558 0 1.092.227 1.478.63l3.792 3.949c.366.382.571.891.571 1.42v8.165a3.814 3.814 0 0 1-3.657 3.836m-7.926 0h7.926m-7.926 0h7.926"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.77 3.182v2.892a2.56 2.56 0 0 0 2.554 2.56h2.738M15.479 17.611v-1.893M10.749 17.611v-2.588M13.114 17.611v-.7M8.315 17.611v-.7M8.001 14.027l2.495-2.704 2.847 1.864 2.441-2.629"
    />
  </Svg>
);
export default IconlystDcoumentChartsLight;
