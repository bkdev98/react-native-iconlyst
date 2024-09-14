import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare6Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="m4.085 9.26-1.083-.002H3a1 1 0 0 0-.708 1.707l2.042 2.04a.99.99 0 0 0 .751.359l.014-.002h.006a1 1 0 0 0 .707-.292l2.093-2.093a1.001 1.001 0 0 0-.704-1.707l-1.116-.003z"
    />
    <Path
      fill={props.color}
      d="M9.314 3.293h7.458C19.85 3.293 22 5.532 22 8.737v7.027c0 3.205-2.152 5.443-5.232 5.443H9.314c-3.078 0-5.229-2.238-5.229-5.443a1 1 0 0 1 2 0c0 2.124 1.238 3.443 3.23 3.443h7.454c1.992 0 3.232-1.319 3.232-3.443V8.737c0-2.124-1.239-3.444-3.23-3.444H9.314c-1.99 0-3.229 1.32-3.229 3.444v.53l-2-.006v-.524c0-3.205 2.151-5.444 5.23-5.444"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshSquare6Bulk;
