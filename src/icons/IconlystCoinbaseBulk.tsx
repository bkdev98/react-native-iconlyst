import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinbaseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.155 14.652a3.78 3.78 0 0 1-4.085.809 3.78 3.78 0 0 1-2.312-3.457c0-1.5.929-2.894 2.312-3.467a3.79 3.79 0 0 1 4.085.808.75.75 0 1 0 1.059-1.063c-1.486-1.481-3.79-1.934-5.718-1.131a5.31 5.31 0 0 0-3.238 4.853c0 2.093 1.3 4.039 3.238 4.843a5.297 5.297 0 0 0 5.718-1.132.75.75 0 1 0-1.059-1.063"
    />
  </Svg>
);
export default IconlystCoinbaseBulk;
