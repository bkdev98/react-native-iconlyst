import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceTwoTone = ({
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
      d="M9.855 8.092a2.893 2.893 0 0 0-2.883-2.903"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.089 16.027a2.893 2.893 0 0 1 2.883-2.903c.506 0 .981.132 1.394.362"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.107 13.03c.176-.66.51-1.236.951-1.696"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.314 18.645a2.25 2.25 0 0 1-2.24 2.255 2.246 2.246 0 0 1-2.235-2.103 2.9 2.9 0 0 1-.867.134 2.893 2.893 0 0 1-2.884-2.903c0-.728.266-1.392.705-1.902a2.16 2.16 0 0 1-1.48-2.056c0-.965.628-1.782 1.495-2.06a2.9 2.9 0 0 1-.72-1.918 2.893 2.893 0 0 1 2.884-2.903c.3 0 .59.046.862.132a2.247 2.247 0 0 1 2.24-2.22c1.237 0 2.24 1.009 2.24 2.255z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.822 17.2a.93.93 0 0 0-.653-1.141.92.92 0 0 0-.644.062M14.726 5.65h-2.412M12.32 9.203h3.028a1 1 0 0 0 .554-.168.7.7 0 0 0 .112-.098l1.774-1.867"
      opacity={0.4}
    />
    <Circle
      cx={1.1}
      cy={1.1}
      r={1.1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(0 -1 -1 0 19.69 7.426)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.47 11.816H12.37M14.726 18.348h-2.412"
      opacity={0.4}
    />
    <Circle
      cx={1.1}
      cy={1.1}
      r={1.1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(0 -1 -1 0 20.79 12.916)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.34 14.797h3.008a1 1 0 0 1 .554.168.7.7 0 0 1 .112.098l1.774 1.867"
      opacity={0.4}
    />
    <Circle
      cx={18.555}
      cy={17.723}
      r={1.1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 18.555 17.723)"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceTwoTone;
