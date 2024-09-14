import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBoardOutline = ({
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
      d="M2.75 7.432c0-2.639 2.14-4.779 4.778-4.779h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456a4.78 4.78 0 0 1-4.78 4.779H7.529a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.279a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.433a3.28 3.28 0 0 0-3.28-3.279z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.88 7.326a.75.75 0 0 1 .75.75v4.17a.75.75 0 0 1-1.5 0v-4.17a.75.75 0 0 1 .75-.75m7.24.856a.75.75 0 0 1 .75.75v3.313a.75.75 0 1 1-1.5 0V8.932a.75.75 0 0 1 .75-.75m-3.425 1.355a.75.75 0 0 1 .75.75v1.959a.75.75 0 0 1-1.5 0v-1.959a.75.75 0 0 1 .75-.75M6.807 20.834a.75.75 0 0 1 .75-.75h9.888a.75.75 0 0 1 0 1.5H7.557a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.505 16.18a.75.75 0 0 1 .62.86l-.637 3.918a.75.75 0 0 1-1.481-.241l.637-3.917a.75.75 0 0 1 .86-.62m3.99 0a.75.75 0 0 1 .861.62l.637 3.917a.75.75 0 0 1-1.48.24l-.637-3.916a.75.75 0 0 1 .62-.861"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartBoardOutline;
