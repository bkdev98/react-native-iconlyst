import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphChartBold = ({
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
      d="M4.714 11.42C4.714 7.328 8.042 4 12.132 4s7.417 3.328 7.417 7.42-3.327 7.42-7.417 7.42-7.418-3.328-7.418-7.42m17.279 8.872-2.735-2.732a9.37 9.37 0 0 0 2.29-6.14c0-5.194-4.224-9.42-9.416-9.42s-9.418 4.226-9.418 9.42 4.225 9.42 9.418 9.42a9.36 9.36 0 0 0 5.663-1.912l2.784 2.78a1 1 0 0 0 1.415-.001c.39-.391.39-1.024-.001-1.415"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.403 11.2a1 1 0 0 0-1 1v1.9a1 1 0 1 0 2 0v-1.9a1 1 0 0 0-1-1M8.863 9.45a1 1 0 0 0-1 1v3.65a1 1 0 1 0 2 0v-3.65a1 1 0 0 0-1-1M12.16 7.13a1 1 0 0 0-1 1v5.97a1 1 0 1 0 2 0V8.13a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphChartBold;
