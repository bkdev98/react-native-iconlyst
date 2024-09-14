import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleBold = ({
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
      fill={props.color}
      d="M12.172 14.682a3.334 3.334 0 0 0 3.33-3.331 3.334 3.334 0 0 0-3.33-3.331 3.334 3.334 0 0 0-3.33 3.33 3.334 3.334 0 0 0 3.33 3.332"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.15 21.75c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75S21.9 6.624 21.9 12s-4.374 9.75-9.75 9.75m0-18C7.601 3.75 3.9 7.451 3.9 12c0 2.666 1.271 5.04 3.24 6.55.575-1.486 2.193-2.71 5.032-2.71 2.828 0 4.444 1.21 5.025 2.682A8.24 8.24 0 0 0 20.4 12c0-4.549-3.7-8.25-8.25-8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCircleBold;
