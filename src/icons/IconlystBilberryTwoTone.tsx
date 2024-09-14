import * as React from 'react';
import Svg, { Path, Circle, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBilberryTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.73 15.963a4.223 4.223 0 1 1 4.234-3.633"
    />
    <Circle
      cx={4.222}
      cy={4.222}
      r={4.222}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 16.222 12.556)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.04 11.125a4.222 4.222 0 1 1 4.16 4.838"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M16.819 7.486c1.46-1.334 1.733-3.176 1.715-4.474-5.715-.244-6.564 3.425-6.528 6.06M7.191 7.486C5.731 6.152 5.458 4.31 5.476 3.012c5.715-.244 6.564 3.425 6.528 6.06M7.025 11.72h-.013M17.183 10.805h-.012M11.26 15.921h-.013" />
    </G>
  </Svg>
);
export default IconlystBilberryTwoTone;
