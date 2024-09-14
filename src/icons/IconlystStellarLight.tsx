import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStellarLight = ({
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
      d="M5.606 14.132a6.8 6.8 0 0 1-.344-2.137 6.736 6.736 0 0 1 6.736-6.735c.935 0 1.825.19 2.634.533M20 9.018l-16 8.8M4 15.017l16-8.8M18.407 9.89c.216.665.335 1.369.335 2.105A6.74 6.74 0 0 1 12 18.738c-.85 0-1.66-.155-2.407-.442"
    />
  </Svg>
);
export default IconlystStellarLight;
