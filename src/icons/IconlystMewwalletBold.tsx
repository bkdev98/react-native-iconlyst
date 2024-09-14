import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMewwalletBold = ({
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
      d="M16.696 14.349a.75.75 0 0 1-1.007.336l-4.023-2.01a.75.75 0 0 1-.335-1.006.75.75 0 0 1 1.005-.336l3.281 1.639c.313-1.215 0-2.575-.86-3.51a3.79 3.79 0 0 0-4.152-.941.75.75 0 0 1-.553-1.395 5.305 5.305 0 0 1 5.806 1.319 5.28 5.28 0 0 1 .837 5.904M13.95 16.88a5.2 5.2 0 0 1-1.931.367 5.27 5.27 0 0 1-3.878-1.686 5.29 5.29 0 0 1-.836-5.903.75.75 0 0 1 1.342.669 3.78 3.78 0 0 0 .6 4.218 3.78 3.78 0 0 0 4.15.94.75.75 0 1 1 .553 1.395M12 2.504c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMewwalletBold;
