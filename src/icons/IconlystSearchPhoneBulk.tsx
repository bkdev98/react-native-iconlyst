import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPhoneBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.84 2.74h-3.17c-.245 0-.39.282-.269.495a5.37 5.37 0 0 1 .516 4.103.34.34 0 0 0 .092.328c.92.917.923 2.496.031 3.444-.49.53-1.16.8-1.83.8-.7 0-1.255-.301-1.764-.73a.32.32 0 0 0-.287-.065 5.483 5.483 0 0 1-2.536.087.317.317 0 0 0-.383.303v6.135c0 2.26 1.84 4.1 4.1 4.1h5.5c2.26 0 4.1-1.84 4.1-4.1V6.84c0-2.26-1.84-4.1-4.1-4.1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.04 18.39c-.52 0-.95-.43-.95-.95 0-.51.43-.95.95-.95.51 0 .95.44.95.95 0 .52-.44.95-.95.95M7.71 8.06c-1.19 0-2.15-.96-2.15-2.15s.96-2.15 2.15-2.15 2.15.96 2.15 2.15-.96 2.15-2.15 2.15m4.01.8-.98-.92c.39-.58.62-1.28.62-2.03 0-2.01-1.64-3.65-3.65-3.65S4.06 3.9 4.06 5.91 5.7 9.56 7.71 9.56c.72 0 1.39-.21 1.95-.57l1.04.97a.751.751 0 0 0 1.06-.04c.28-.3.26-.78-.04-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPhoneBulk;
