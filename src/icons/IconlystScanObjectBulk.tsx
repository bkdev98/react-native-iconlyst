import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanObjectBulk = ({
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
      <Path d="M17.107 2.552H15.85a.75.75 0 0 0 0 1.5h1.258a3.147 3.147 0 0 1 3.143 3.143v1.577a.75.75 0 0 0 1.5 0V7.195a4.65 4.65 0 0 0-4.643-4.643M3 9.52a.75.75 0 0 0 .75-.75V7.195A3.147 3.147 0 0 1 6.893 4.05h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 7.194V8.77c0 .414.336.75.75.75M8.15 20.551H6.892a3.146 3.146 0 0 1-3.142-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.642 4.642H8.15a.75.75 0 0 0 0-1.5M21 15.082a.75.75 0 0 0-.75.75v1.577a3.145 3.145 0 0 1-3.142 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.642-4.642v-1.577a.75.75 0 0 0-.75-.75" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 8.082A4.22 4.22 0 0 0 7.783 12.3 4.22 4.22 0 0 0 12 16.518a4.223 4.223 0 0 0 4.218-4.218A4.223 4.223 0 0 0 12 8.082"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanObjectBulk;
