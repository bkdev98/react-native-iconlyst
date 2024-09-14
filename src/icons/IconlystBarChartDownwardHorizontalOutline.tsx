import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartDownwardHorizontalOutline = ({
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
      d="M3.75 15.118a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v5a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75zm1.5.75v4.25c0 .139.112.25.25.25h6a.25.25 0 0 0 .25-.25v-4.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 9.118a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v5a1.75 1.75 0 0 1-1.75 1.75h-11a.75.75 0 0 1-.75-.75zm1.5.75v4.5H15.5a.25.25 0 0 0 .25-.25v-4.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 4.12c0-.968.784-1.75 1.75-1.75h14c.968 0 1.75.783 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-15a.75.75 0 0 1-.75-.75zm1.75-.25a.25.25 0 0 0-.25.25v4.25H19.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartDownwardHorizontalOutline;
