import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockwiseClockRedoOutline = ({
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
      d="M12.56 21.75a9.75 9.75 0 1 1 8.5-14.556.75.75 0 0 1-1.3.74 8.248 8.248 0 1 0-11.865 10.85 8.245 8.245 0 0 0 12.627-4.576.75.75 0 0 1 1.445.4 9.775 9.775 0 0 1-9.4 7.141z"
    />
    <Path
      fill={props.color}
      d="M20.65 8.319h-3.282a.75.75 0 1 1 0-1.5H19.9v-2.55a.75.75 0 1 1 1.5 0v3.3a.75.75 0 0 1-.75.75M15.399 15.316a.75.75 0 0 1-.383-.106l-3.175-1.9a.75.75 0 0 1-.365-.644v-4.1a.75.75 0 1 1 1.5 0v3.673l2.809 1.678a.75.75 0 0 1-.386 1.394z"
    />
  </Svg>
);
export default IconlystClockwiseClockRedoOutline;
