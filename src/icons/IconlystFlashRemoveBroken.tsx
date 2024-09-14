import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashRemoveBroken = ({
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
      d="m8.074 8.895-2.515 3.463c-.46.645-.01 1.538.783 1.538h5.325v5.628c0 .94 1.197 1.326 1.75.57l2.293-3.159M10.627 5.389l1.446-1.99c.553-.755 1.75-.368 1.75.57v2.983M16.198 9.596h2.948c.792 0 1.244.893.783 1.538l-1.667 2.294M3.887 4.476 19.559 21"
    />
  </Svg>
);
export default IconlystFlashRemoveBroken;
