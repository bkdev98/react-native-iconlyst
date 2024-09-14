import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletRemoveOutline = ({
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
      d="M7.468 7.43c0-1.033.837-1.871 1.87-1.871h7.865c1.034 0 1.872.837 1.872 1.871v1.527c0 2.983-2.183 5.702-5.236 5.993a5.804 5.804 0 0 1-6.371-5.776zm1.87-.371a.37.37 0 0 0-.37.371v1.744a4.304 4.304 0 0 0 4.728 4.283c2.2-.21 3.879-2.204 3.879-4.5V7.43a.37.37 0 0 0-.372-.371zM5.645 16.94a.75.75 0 0 1 1.06 0l1.238 1.236 1.236-1.236a.75.75 0 1 1 1.06 1.061l-1.235 1.235 1.235 1.233a.75.75 0 0 1-1.06 1.062l-1.236-1.235-1.237 1.235a.75.75 0 1 1-1.06-1.062l1.236-1.233L5.646 18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.272 13.64a.75.75 0 0 1 .75.75v3.195c.004.715.6 1.32 1.367 1.324h1.055c1.155 0 2.118.922 2.118 2.091a.75.75 0 0 1-1.5 0 .605.605 0 0 0-.618-.59h-1.06c-1.564-.007-2.854-1.252-2.863-2.82v-3.1990000000000003a.75.75 0 0 1 .75-.75M10.73 2.25a.75.75 0 0 1 .75.75v3.31a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m5.084 0a.75.75 0 0 1 .75.75v3.31a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletRemoveOutline;
