import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSquareTwoTone = ({
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
      d="M8.433 3h8.434c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.433c-2.949 0-4.783-2.081-4.783-5.026V8.026C3.65 5.081 5.493 3 8.433 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.65 13.973c-1.953 0-3.619.294-3.619 1.477 0 1.182 1.657 1.486 3.619 1.486 1.951 0 3.618-.294 3.618-1.477 0-1.18-1.656-1.486-3.618-1.486M14.947 9.359a2.296 2.296 0 1 1-4.592 0 2.296 2.296 0 0 1 4.592 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSquareTwoTone;
