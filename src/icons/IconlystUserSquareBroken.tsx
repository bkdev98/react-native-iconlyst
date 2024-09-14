import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSquareBroken = ({
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
      d="M21.4 8.026C21.4 5.081 19.565 3 16.617 3H8.183C5.243 3 3.4 5.081 3.4 8.026v7.948C3.4 18.919 5.234 21 8.183 21h8.433c2.95 0 4.784-2.081 4.784-5.026v-4.335"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.36 16.789c.988-.187 1.658-.58 1.658-1.33 0-1.18-1.656-1.486-3.618-1.486-1.953 0-3.619.294-3.619 1.477 0 1.064 1.344 1.417 3.043 1.477"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.696 9.359a2.296 2.296 0 1 1-4.592 0 2.296 2.296 0 0 1 4.592 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSquareBroken;
