import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare3TwoTone = ({
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
      d="M8.283 3.063h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.08-4.783-5.026V8.09c0-2.945 1.844-5.026 4.783-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.338 9.207h-2.656a1.43 1.43 0 1 0 0 2.86h1.634a1.43 1.43 0 1 1 0 2.86H10.66M12.5 14.927v1.2M12.5 8v1.211"
    />
  </Svg>
);
export default IconlystDollarSquare3TwoTone;
