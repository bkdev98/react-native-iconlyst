import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipBackwardOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.02 5.491a.75.75 0 0 1 0 1.06l-2.96 2.96 2.96 2.96a.75.75 0 1 1-1.06 1.062l-3.49-3.491a.75.75 0 0 1 0-1.06l3.49-3.49a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 9.511a.75.75 0 0 1 .75-.75h11.766a4.983 4.983 0 1 1 0 9.967h-3.484a.75.75 0 0 1 0-1.5h3.484a3.484 3.484 0 0 0 0-6.967H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlipBackwardOutline;
