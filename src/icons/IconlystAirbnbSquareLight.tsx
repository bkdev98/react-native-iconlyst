import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.404c.355.375.895.884 1.347 1.148.368.3 1.674.976 2.849-.14 1.176-1.115.408-2.578.26-2.875-.236-.472-2.886-5.6-2.886-5.6A1.76 1.76 0 0 0 12 6.97c-.687 0-1.275.396-1.569.969 0 0-2.65 5.127-2.886 5.6-.148.296-.916 1.76.26 2.874 1.175 1.116 2.481.44 2.849.14.452-.264.992-.773 1.347-1.149m0 0c-.654-.693-1.529-1.47-1.529-2.513a1.53 1.53 0 0 1 3.06 0c0 1.042-.876 1.82-1.53 2.512"
    />
  </Svg>
);
export default IconlystAirbnbSquareLight;
