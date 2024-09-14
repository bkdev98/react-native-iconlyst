import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrTwoTone = ({
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
      d="M20.791 14.068v1.35a3 3 0 0 1-1.686 2.698l-5.301 2.58a3 3 0 0 1-2.627 0l-5.3-2.58a3 3 0 0 1-1.686-2.697v-1.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.791 9.947V8.68a3 3 0 0 0-1.644-2.676l-5.3-2.685a3 3 0 0 0-2.712 0l-5.3 2.685a3 3 0 0 0-1.644 2.676v1.268"
      opacity={0.4}
    />
    <Circle
      cx={12.491}
      cy={11.981}
      r={4.047}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.49 16.047v4.95"
    />
  </Svg>
);
export default IconlystAnkrTwoTone;
