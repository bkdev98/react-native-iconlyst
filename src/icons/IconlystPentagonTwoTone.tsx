import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.982 3.808a2.58 2.58 0 0 1 3.035 0M4.565 8.47a2.58 2.58 0 0 0-.938 2.887m2.45 7.545a2.58 2.58 0 0 0 2.456 1.784m7.933 0c1.119 0 2.11-.72 2.456-1.784m2.452-7.545a2.58 2.58 0 0 0-.938-2.887"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.983 3.808 4.565 8.47m-.938 2.887 2.45 7.545m2.457 1.784h7.932m2.456-1.784 2.452-7.545m-.938-2.887-6.419-4.662"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPentagonTwoTone;
