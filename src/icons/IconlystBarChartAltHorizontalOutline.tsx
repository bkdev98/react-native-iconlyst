import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartAltHorizontalOutline = ({
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
      d="M5.5 3.87a.25.25 0 0 0-.25.25v4.25h6.502V4.12a.25.25 0 0 0-.25-.25zm-1.75.25c0-.968.785-1.75 1.75-1.75h6.001c.967 0 1.75.783 1.75 1.75v5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM3.97 14.588a.75.75 0 0 1 .53-.22h12a.75.75 0 0 1 .75.75v5a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 1 .22-.53m1.28 1.28v4.25c0 .14.113.25.25.25h10a.25.25 0 0 0 .25-.25v-4.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 9.12a.75.75 0 0 1 .75-.75h15c.967 0 1.75.783 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-15a.75.75 0 0 1-.75-.75zm1.5.75v4.5H19.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartAltHorizontalOutline;
