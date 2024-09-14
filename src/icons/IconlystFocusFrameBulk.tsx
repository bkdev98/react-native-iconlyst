import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFocusFrameBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.107 2.548H15.85a.75.75 0 0 0 0 1.5h1.258A3.147 3.147 0 0 1 20.25 7.19v1.577a.75.75 0 0 0 1.5 0V7.19a4.65 4.65 0 0 0-4.643-4.643M3 9.518a.75.75 0 0 0 .75-.75V7.19a3.147 3.147 0 0 1 3.143-3.143h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 7.19v1.577c0 .414.336.75.75.75M8.15 20.553H6.892a3.146 3.146 0 0 1-3.142-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.642 4.642H8.15a.75.75 0 0 0 0-1.5M21 15.083a.75.75 0 0 0-.75.75v1.577a3.146 3.146 0 0 1-3.143 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.643-4.642v-1.577a.75.75 0 0 0-.75-.75" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.098 12.298A2.9 2.9 0 0 0 14.2 9.4H9.8a2.9 2.9 0 0 0-2.899 2.898 2.9 2.9 0 0 0 2.9 2.9h4.398c1.598 0 2.9-1.3 2.9-2.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFocusFrameBulk;
