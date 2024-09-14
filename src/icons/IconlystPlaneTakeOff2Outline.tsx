import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOff2Outline = ({
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
      d="M7.244 15.733a4.475 4.475 0 0 1-4.143-3.09c-.064-.146-.25-.6-.388-.93l-.141-.341a.75.75 0 1 1 1.384-.577l.143.345.15.365 1.76-.746a401 401 0 0 1 1.775-.751L5.774 5.14a.75.75 0 0 1 .44-.992q.277-.102.542-.2.646-.265 1.32-.442a2.72 2.72 0 0 1 2.478.763 193 193 0 0 1 3.509 3.13c1.134-.47 2.109-.893 3.128-1.261a4.05 4.05 0 0 1 3.063.008 2.37 2.37 0 0 1 1.207 1.517c.449 1.6-.782 2.938-2.117 3.5a617 617 0 0 1-10 4.136 5.7 5.7 0 0 1-2.1.434m-2.345-2.874c.882 1.375 2.186 1.726 3.887 1.044 3.44-1.38 6.827-2.8 9.976-4.126.624-.263 1.473-.936 1.255-1.713a.88.88 0 0 0-.45-.59 2.57 2.57 0 0 0-1.866.07c-.974.352-1.924.765-2.977 1.229a1.42 1.42 0 0 1-1.678-.274 190 190 0 0 0-3.48-3.106c-.561-.491-.9-.488-1.14-.432q-.496.13-.971.32l2 4.844a.75.75 0 0 1-.405.979c-.623.258-1.54.647-2.453 1.036zM13.576 20.546H5.17a.75.75 0 1 1 0-1.5h8.406a.75.75 0 1 1 0 1.5M17.308 17.094a.749.749 0 0 1-.516-1.292l1.977-1.872a.75.75 0 0 1 1.031 0l1.98 1.872a.752.752 0 0 1-1.033 1.09l-1.463-1.39-1.46 1.382a.75.75 0 0 1-.516.21"
    />
    <Path
      fill={props.color}
      d="M19.287 20.547a.75.75 0 0 1-.75-.75v-5.323a.75.75 0 0 1 1.5 0v5.323a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPlaneTakeOff2Outline;
