import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointerBulk = ({
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
      d="M4.169 4.167c.282-.281.703-.367 1.071-.223h.002l13.999 5.52c.383.152.635.523.633.936v.002c-.004.413-.26.78-.644.927l-2.741 1.044-.008-.013-1.093.432-.6.228.007.006-1.305.515-.83 2.192-1.33 3.496-.001.003c-.16.413-.546.612-.896.64l-.02.001h-.019a1 1 0 0 1-.93-.63v-.002L3.943 5.239a1 1 0 0 1 .225-1.071z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="m16.489 12.373-.008-.013-1.093.432zM14.795 13.026l-1.305.515-.83 2.192.36-.945 4.97 4.97.002.002a1.251 1.251 0 0 0 1.767-1.77z" />
    </G>
  </Svg>
);
export default IconlystMousePointerBulk;
