import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleSquareBulk = ({
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
      d="M16.217 2.563H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.412 13.562h-2.184v.51h.864a.75.75 0 0 1 0 1.5h-.864v.99a.75.75 0 0 1-1.5 0v-.99h-.207a.75.75 0 0 1 0-1.5h.207v-.51h-.207a.75.75 0 0 1 0-1.5h.207V8.363a.75.75 0 0 1 .75-.75h2.934a2.977 2.977 0 0 1 2.979 2.97 2.983 2.983 0 0 1-2.979 2.98m-2.184-4.449h2.184c.815 0 1.479.66 1.479 1.47 0 .815-.664 1.48-1.48 1.48h-2.183z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRubleSquareBulk;
