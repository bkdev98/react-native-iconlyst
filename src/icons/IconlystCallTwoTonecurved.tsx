import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallTwoTonecurved = ({
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
      d="M8.2 16.195C1.303 9.296 2.283 6.137 3.01 5.119c.094-.164 2.396-3.611 4.865-1.589 6.126 5.045-1.63 4.332 3.514 9.477"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.2 16.195c6.9 6.899 10.06 5.918 11.078 5.19.163-.093 3.61-2.395 1.588-4.864-5.045-6.125-4.331 1.63-9.477-3.514"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCallTwoTonecurved;
