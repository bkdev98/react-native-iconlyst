import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiDigitalKeyTwoTone = ({
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
      d="m16.895 20.608 1.889-1.888-1.116-1.4 1.08-1.161-1.08-1.435 1.08-1.08-.002-1.429a4.604 4.604 0 1 0-3.741-.02l.002 6.525z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.92 6.714a1.38 1.38 0 0 1 1.95 0"
    />
    <Circle
      cx={1.224}
      cy={1.224}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 5.948 7.238)"
    />
    <Circle
      cx={1.224}
      cy={1.224}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 5.948 12.508)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.952 13.732h6.537"
    />
    <Circle
      cx={1.224}
      cy={1.224}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 5.948 17.705)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.516 16.861H9.5l-1.23 2.068H5.952M9.5 10.604 8.271 8.536H5.952"
    />
  </Svg>
);
export default IconlystAiDigitalKeyTwoTone;
