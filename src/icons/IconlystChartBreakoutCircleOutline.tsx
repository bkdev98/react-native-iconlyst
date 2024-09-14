import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBreakoutCircleOutline = ({
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
      d="M12.342 3.09a.75.75 0 0 1-.673.82 8.251 8.251 0 1 0 9.036 9.035.75.75 0 1 1 1.492.148c-.489 4.928-4.645 8.776-9.702 8.776-5.384 0-9.75-4.365-9.75-9.75 0-5.056 3.848-9.212 8.776-9.702a.75.75 0 0 1 .82.673"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.186 7.907a.75.75 0 0 1 .18 1.045 12.44 12.44 0 0 1-10.17 5.267c-.96 0-1.895-.109-2.794-.314a.75.75 0 0 1 .336-1.463c.789.181 1.611.277 2.457.277 3.694 0 6.961-1.828 8.946-4.633a.75.75 0 0 1 1.045-.18M15.646 2.37a.75.75 0 0 1 .75.75v1.35a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75m5.03 1.569a.75.75 0 0 1 0 1.06l-.955.955a.75.75 0 1 1-1.06-1.06l.954-.955a.75.75 0 0 1 1.06 0m-1.271 5.03a.75.75 0 0 1 .75-.75h1.35a.75.75 0 0 1 0 1.5h-1.35a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.745 8.519a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 .75.75v3.6a.75.75 0 1 1-1.5 0v-2.85h-2.85a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartBreakoutCircleOutline;
