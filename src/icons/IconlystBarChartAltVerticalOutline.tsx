import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartAltVerticalOutline = ({
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
      d="M4.5 12.867a.25.25 0 0 0-.25.25v6.001c0 .138.112.25.25.25h4.25v-6.5zm-1.75.25c0-.966.783-1.75 1.75-1.75h5a.75.75 0 0 1 .75.75v8.001a.75.75 0 0 1-.75.75h-5a1.75 1.75 0 0 1-1.75-1.75zM14.749 8.118a.75.75 0 0 1 .75-.75h5c.967 0 1.75.784 1.75 1.75V19.12a1.75 1.75 0 0 1-1.75 1.75h-5a.75.75 0 0 1-.75-.75zm1.5.75v10.5h4.25a.25.25 0 0 0 .25-.249v-10a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.75 5.118c0-.966.783-1.75 1.75-1.75h4c.967 0 1.75.784 1.75 1.75V20.12a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zm1.75-.25a.25.25 0 0 0-.25.25V19.37h4.5V5.12a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartAltVerticalOutline;
