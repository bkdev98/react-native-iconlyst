import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentLineChartTwoTone = ({
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
      d="M14.77 3.182v2.892a2.56 2.56 0 0 0 2.554 2.56h2.738"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.077 15.798 2.195-2.867 2.504 1.975 2.148-2.787"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDcoumentLineChartTwoTone;
