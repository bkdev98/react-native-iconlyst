import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatIntelligenceTwoTone = ({
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
      cx={1.548}
      cy={1.548}
      r={1.548}
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 17.493 4.5)"
    />
    <Circle
      cx={1.548}
      cy={1.548}
      r={1.548}
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 6.656 16.37)"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.397 6.049H7.172c-1.14 0-2.064.924-2.064 2.064v8.257"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.72 10.623h7.872c1.086 0 1.968.881 1.968 1.968v7.248a.656.656 0 0 1-1.024.544l-1.922-1.3a1.1 1.1 0 0 0-.607-.185H11.72a1.97 1.97 0 0 1-1.968-1.968v-4.34c0-1.086.881-1.967 1.968-1.967Z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChatIntelligenceTwoTone;
