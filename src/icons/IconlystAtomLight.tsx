import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtomLight = ({
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
      d="M16.392 16.009c4.449-4.45 6.26-9.85 4.046-12.065-2.214-2.213-7.615-.402-12.065 4.047-4.448 4.45-6.26 9.85-4.046 12.065 2.214 2.213 7.615.402 12.065-4.047"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.374 16.009c-4.449-4.45-6.261-9.85-4.047-12.065 2.215-2.213 7.616-.402 12.065 4.047 4.448 4.45 6.26 9.85 4.047 12.065-2.215 2.213-7.616.402-12.065-4.047"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.512 12a2.129 2.129 0 1 0-4.258 0 2.129 2.129 0 0 0 4.258 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAtomLight;
