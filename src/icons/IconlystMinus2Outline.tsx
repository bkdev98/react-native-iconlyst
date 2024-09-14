import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMinus2Outline = ({
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
      d="M16.05 11.752a.75.75 0 0 1-.75.75H8.7a.75.75 0 0 1 0-1.5h6.6a.75.75 0 0 1 .75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2c5.385 0 9.75 4.365 9.75 9.75S17.385 21.5 12 21.5s-9.75-4.366-9.75-9.75S6.615 2 12 2m8.25 9.75A8.25 8.25 0 0 0 12 3.5a8.25 8.25 0 0 0-8.25 8.25 8.25 8.25 0 1 0 16.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMinus2Outline;
