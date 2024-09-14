import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinbaseBold = ({
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
      d="M10.57 15.462a3.78 3.78 0 0 0 4.085-.81.75.75 0 1 1 1.059 1.064 5.3 5.3 0 0 1-5.719 1.132c-1.937-.804-3.238-2.75-3.238-4.843a5.31 5.31 0 0 1 3.238-4.853c1.93-.803 4.233-.35 5.719 1.13a.75.75 0 1 1-1.059 1.063 3.79 3.79 0 0 0-4.085-.807 3.79 3.79 0 0 0-2.313 3.467c0 1.494.93 2.883 2.313 3.457M12 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinbaseBold;
