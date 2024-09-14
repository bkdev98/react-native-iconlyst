import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartAnalysishOutline = ({
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
      d="M3.35 8.499a4.51 4.51 0 0 1 4.51-4.51h9.28a4.51 4.51 0 0 1 4.51 4.51v5.093a4.51 4.51 0 0 1-4.51 4.51H7.86a4.51 4.51 0 0 1-4.51-4.51zm4.51-3.01a3.01 3.01 0 0 0-3.01 3.01v5.093a3.01 3.01 0 0 0 3.01 3.01h9.28a3.01 3.01 0 0 0 3.01-3.01V8.5a3.01 3.01 0 0 0-3.01-3.01z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.502 7.607a.75.75 0 0 1 .75.75v4.973a.75.75 0 1 1-1.5 0V8.357a.75.75 0 0 1 .75-.75m-3.88 1.657a.75.75 0 0 1 .75.75v3.316a.75.75 0 0 1-1.5 0v-3.315a.75.75 0 0 1 .75-.75m7.76.742a.75.75 0 0 1 .75.75v2.574a.75.75 0 0 1-1.5 0v-2.574a.75.75 0 0 1 .75-.75M12.501 16.63a.75.75 0 0 1 .535.225l3.672 3.737a.75.75 0 0 1-1.07 1.052l-3.137-3.193-3.138 3.193a.75.75 0 1 1-1.07-1.052l3.673-3.737a.75.75 0 0 1 .535-.224M12.5 2.37a.75.75 0 0 1 .75.75v1.629a.75.75 0 0 1-1.5 0v-1.63a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartAnalysishOutline;
