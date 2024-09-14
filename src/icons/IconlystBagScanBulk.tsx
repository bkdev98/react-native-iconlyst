import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagScanBulk = ({
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
      d="M14.25 6.69H9.74c-1.8 0-3.05 1.31-3.05 3.19v4.24c0 1.91 1.23 3.19 3.05 3.19h4.51c1.8 0 3.06-1.31 3.06-3.19V9.88c0-1.88-1.26-3.19-3.06-3.19"
      clipRule="evenodd"
      opacity={0.4}
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.258a3.147 3.147 0 0 1 3.143 3.142V8.47a.75.75 0 0 0 1.5 0V6.892a4.65 4.65 0 0 0-4.643-4.642M3 9.219a.75.75 0 0 0 .75-.75V6.892A3.146 3.146 0 0 1 6.893 3.75h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 6.892v1.577c0 .414.336.75.75.75M8.15 20.25H6.892a3.146 3.146 0 0 1-3.142-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.642 4.642H8.15a.75.75 0 0 0 0-1.5M21 14.782a.75.75 0 0 0-.75.75v1.576a3.146 3.146 0 0 1-3.142 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.642-4.642v-1.577a.75.75 0 0 0-.75-.75" />
    </G>
    <Path
      fill={props.color}
      d="M9.34 10.3c0 1.47 1.19 2.66 2.66 2.66s2.66-1.19 2.66-2.66c0-.42-.33-.75-.75-.75-.41 0-.75.33-.75.75a1.16 1.16 0 0 1-2.32 0c0-.42-.34-.75-.75-.75-.42 0-.75.33-.75.75"
    />
  </Svg>
);
export default IconlystBagScanBulk;
