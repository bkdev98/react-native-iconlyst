import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserShieldLight = ({
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
    <Circle
      cx={10.727}
      cy={8.177}
      r={4.701}
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
      d="M4.312 19.503c-.111-.638-.065-1.3-.065-1.944 0-2.43 1.97-4.399 4.398-4.399h4.284q.49.001.95.103"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.573 20.523s2.47-.748 2.47-2.81c0-2.064.09-2.224-.107-2.423-.2-.2-2.04-.84-2.363-.84-.324 0-2.165.64-2.363.84-.198.198-.109.36-.109 2.422s2.472 2.811 2.472 2.811"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserShieldLight;
