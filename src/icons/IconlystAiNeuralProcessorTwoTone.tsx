import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralProcessorTwoTone = ({
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
      d="M8.992 4.537h7.022c2.443 0 3.956 1.326 3.95 3.763v7.395c0 2.436-1.515 3.77-3.958 3.77H8.992c-2.436 0-3.956-1.357-3.956-3.832V8.3c0-2.437 1.52-3.763 3.956-3.763"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.549 4.537V3m-4.05 1.537V3m-4.05 1.537V3M8.45 19.463V21m4.049-1.537V21m4.05-1.537V21M5.037 7.95H3.5m1.537 4.049H3.5m1.537 4.05H3.5M19.963 16.049H21.5m-1.537-4.05H21.5m-1.537-4.05H21.5M12.499 11.156v8.31"
      opacity={0.4}
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 11.35 11.156)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.548 13.902v5.562"
      opacity={0.4}
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 15.398 13.902)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.45 13.902v5.562"
      opacity={0.4}
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 7.3 13.902)"
    />
  </Svg>
);
export default IconlystAiNeuralProcessorTwoTone;
