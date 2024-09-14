import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletChargeOutline = ({
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
      d="M7.435 7.43c0-1.033.837-1.871 1.87-1.871h7.865a1.87 1.87 0 0 1 1.87 1.871v1.527c0 2.983-2.18 5.702-5.234 5.993a5.804 5.804 0 0 1-6.371-5.776zm1.87-.371a.37.37 0 0 0-.37.371v1.744a4.304 4.304 0 0 0 4.728 4.283c2.2-.21 3.878-2.203 3.878-4.5V7.43a.37.37 0 0 0-.371-.371z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.236 13.64a.75.75 0 0 1 .75.75v3.195c.005.715.6 1.32 1.368 1.324h1.055c1.155 0 2.118.922 2.118 2.091a.75.75 0 0 1-1.5 0 .605.605 0 0 0-.618-.59h-1.06c-1.564-.007-2.855-1.252-2.863-2.82v-3.1990000000000003a.75.75 0 0 1 .75-.75M8.09 14.884a.75.75 0 0 1 .291 1.02l-.897 1.615h2.365a.75.75 0 0 1 .656 1.115l-1.517 2.73a.75.75 0 0 1-1.312-.729l.898-1.616H6.21a.75.75 0 0 1-.656-1.114l1.517-2.73a.75.75 0 0 1 1.02-.291M10.695 2.25a.75.75 0 0 1 .75.75v3.31a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m5.084 0a.75.75 0 0 1 .75.75v3.31a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletChargeOutline;
