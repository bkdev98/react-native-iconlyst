import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare4Bold = ({
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
      d="M9.364 6.53A2.81 2.81 0 0 0 12 8.378c1.21 0 2.243-.77 2.634-1.847a7 7 0 0 1 2.536 1.784.748.748 0 0 0 1.059.055.75.75 0 0 0 .055-1.06 8.5 8.5 0 0 0-3.548-2.343A2.81 2.81 0 0 0 12 2.772c-1.337 0-2.458.94-2.737 2.195a8.5 8.5 0 0 0-3.576 2.372.752.752 0 0 0 .559 1.25.75.75 0 0 0 .56-.25A7 7 0 0 1 9.364 6.53M2.5 17.065a2.806 2.806 0 0 0 4.12 2.474 8.35 8.35 0 0 0 3.208 1.664.75.75 0 1 0 .383-1.45 6.9 6.9 0 0 1-2.499-1.257c.25-.42.394-.909.394-1.431a2.806 2.806 0 0 0-2.967-2.799 7 7 0 0 1-.114-1.27c0-.547.07-1.11.206-1.676a.75.75 0 0 0-1.458-.352 8.6 8.6 0 0 0-.248 2.028c0 .596.062 1.188.183 1.765A2.8 2.8 0 0 0 2.5 17.064M15.894 17.065c0 .526.146 1.02.4 1.441a6.8 6.8 0 0 1-2.497 1.228.751.751 0 0 0 .373 1.454 8.35 8.35 0 0 0 3.224-1.642 2.806 2.806 0 0 0 4.106-2.481c0-.952-.476-1.793-1.202-2.3a8.6 8.6 0 0 0 .184-1.769c0-.666-.083-1.348-.248-2.028a.75.75 0 1 0-1.458.352c.137.565.206 1.13.206 1.676q0 .645-.115 1.27a2.806 2.806 0 0 0-2.973 2.798"
    />
  </Svg>
);
export default IconlystShare4Bold;
