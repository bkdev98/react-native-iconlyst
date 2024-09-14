import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphChartBulk = ({
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
      d="M4.214 11.42C4.214 7.328 7.542 4 11.632 4s7.417 3.328 7.417 7.42-3.327 7.42-7.417 7.42-7.418-3.328-7.418-7.42m17.279 8.872-2.735-2.731a9.37 9.37 0 0 0 2.29-6.141c0-5.194-4.223-9.42-9.416-9.42s-9.418 4.226-9.418 9.42 4.225 9.42 9.418 9.42a9.36 9.36 0 0 0 5.664-1.912l2.784 2.78a1 1 0 0 0 1.414-.001 1 1 0 0 0-.001-1.415"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.903 11.2a1 1 0 0 0-1 1v1.898a1 1 0 1 0 2 0V12.2a1 1 0 0 0-1-1M8.363 9.45a1 1 0 0 0-1 1v3.648a1 1 0 1 0 2 0V10.45a1 1 0 0 0-1-1M11.66 7.129a1 1 0 0 0-1 1v5.97a1 1 0 1 0 2 0v-5.97a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphChartBulk;
