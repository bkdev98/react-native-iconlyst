import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.162 8.912a.75.75 0 0 1 .75-.75h.933a2.924 2.924 0 0 1 2.926 2.924v.002c0 1.347-.91 2.481-2.15 2.82l1.932 1.934a.75.75 0 1 1-1.06 1.06l-3.11-3.11a.75.75 0 0 1 .53-1.28h.933c.787 0 1.425-.638 1.425-1.424v-.002c0-.786-.638-1.424-1.426-1.424h-.933a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.162 8.914a.75.75 0 0 1 .75-.75h4.976a.75.75 0 0 1 0 1.5H9.912a.75.75 0 0 1-.75-.75M9.162 11.004a.75.75 0 0 1 .75-.75h4.976a.75.75 0 0 1 0 1.5H9.912a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRupeeCircleOutline;
