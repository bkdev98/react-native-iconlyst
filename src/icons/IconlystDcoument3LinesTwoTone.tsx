import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoument3LinesTwoTone = ({
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
      d="M8.544 20.999a3.754 3.754 0 0 1-3.67-3.835V6.656A3.746 3.746 0 0 1 8.634 3h5.652c.558 0 1.092.227 1.478.63l3.792 3.949c.366.382.571.891.571 1.42v8.165A3.814 3.814 0 0 1 16.47 21m-7.926-.001.09.001h7.836m-7.926-.001L16.47 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.063v2.892a2.56 2.56 0 0 0 2.554 2.56h2.738M9.017 16.482h4.459m-4.46-3.42h6.728M9.017 9.64h2.942"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDcoument3LinesTwoTone;
