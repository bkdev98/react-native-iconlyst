import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUnlockBold = ({
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
      fillRule="evenodd"
      d="M14.753 10.535a1.011 1.011 0 1 1 1.011 1.01 1.01 1.01 0 0 1-1.011-1.01m-2.895 1.01a1.011 1.011 0 0 1 0-2.02c.557 0 1.01.453 1.01 1.01s-.453 1.01-1.01 1.01m-3.905 0a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.454 1.01-1.011 1.01m10.044.18c1.196 0 2.262.517 2.968 1.415.105.134.366.095.378-.075q.015-.211.015-.43v-4.05c0-3.308-2.123-5.53-5.283-5.53H7.64c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h5.288a.313.313 0 0 0 .308-.3c.05-.94.346-1.8 1.047-2.475a.33.33 0 0 0 .1-.213 3.69 3.69 0 0 1 3.614-3.451"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.142 19.436a.66.66 0 0 1-.661.66h-2.843a.66.66 0 0 1-.66-.66v-1.601a.66.66 0 0 1 .66-.66h2.843a.66.66 0 0 1 .661.66zm-.661-3.76h-2.366v-.268a.947.947 0 0 1 .924-.932c.304 0 .582.133.765.364a.75.75 0 1 0 1.178-.927 2.46 2.46 0 0 0-1.959-.937 2.45 2.45 0 0 0-2.408 2.42v.55a2.15 2.15 0 0 0-1.137 1.889v1.6c0 1.192.969 2.16 2.16 2.16h2.843a2.163 2.163 0 0 0 2.161-2.16v-1.6c0-1.19-.969-2.16-2.161-2.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordUnlockBold;
