import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber7TwoTone = ({
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
      d="M18.622 5.965A1.8 1.8 0 0 0 17 3.383H8a1.8 1.8 0 0 0-1.8 1.8v3.506a1.8 1.8 0 1 0 3.6 0V6.983h4.364"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.621 5.965c-2.58 5.352-3.718 8.236-4.26 13.793a1.8 1.8 0 0 1-3.584-.35c.502-5.135 1.512-8.296 3.387-12.425"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNumber7TwoTone;
