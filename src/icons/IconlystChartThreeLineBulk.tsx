import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartThreeLineBulk = ({
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
      d="m20.682 10.085-5.817-4.16a.75.75 0 0 0-.98.094l-1.703 1.795-6.456-5.27a.75.75 0 1 0-.948 1.162l6.994 5.71a.75.75 0 0 0 1.018-.064l1.733-1.827 5.285 3.781a.75.75 0 0 0 .874-1.22"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18.518 13.855c1.228 0 2.227 1 2.227 2.229v3.31c0 1.23-1 2.23-2.227 2.23a2.23 2.23 0 0 1-2.227-2.23v-3.31a2.23 2.23 0 0 1 2.227-2.23M11.875 11.374c1.228 0 2.227.996 2.227 2.22v5.8c0 1.229-1 2.23-2.227 2.23a2.23 2.23 0 0 1-2.227-2.23v-5.8c0-1.224.999-2.22 2.227-2.22M5.232 7.164c1.228 0 2.227.996 2.227 2.22v10.01c0 1.23-1 2.23-2.227 2.23a2.23 2.23 0 0 1-2.227-2.23V9.383c0-1.224.999-2.22 2.227-2.22" />
    </G>
  </Svg>
);
export default IconlystChartThreeLineBulk;
