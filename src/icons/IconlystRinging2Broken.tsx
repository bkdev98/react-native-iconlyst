import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging2Broken = ({
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
      d="M6.108 9.869v1.283c0 .76-.168 1.509-.491 2.196l-.455.964c-.693 1.475.383 3.169 2.011 3.169H17.83c1.629 0 2.704-1.694 2.01-3.169l-.453-.964a5.16 5.16 0 0 1-.492-2.196V9.869A6.392 6.392 0 0 0 6.946 6.7M9.48 17.982a3.018 3.018 0 0 0 5.427 1.818M4.568 5.777A7.6 7.6 0 0 1 6.787 3M20.433 5.777A7.6 7.6 0 0 0 18.215 3"
    />
  </Svg>
);
export default IconlystRinging2Broken;
