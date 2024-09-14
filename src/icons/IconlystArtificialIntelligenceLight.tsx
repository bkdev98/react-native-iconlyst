import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceLight = ({
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
      d="M8.272 3h2.178L12 4.555 13.55 3h2.178l1.536 1.544v2.192h2.192L21 8.272v2.178L19.445 12 21 13.55v2.178l-1.544 1.536h-2.192v2.192L15.728 21H13.55L12 19.445 10.45 21H8.272l-1.536-1.544v-2.192H4.544L3 15.728V13.55L4.555 12 3 10.45V8.272l1.544-1.536h2.192V4.544zM12 19.458v-2.306M12 4.528v2.353"
    />
    <Circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 10.75 17.152)"
    />
    <Circle
      cx={12}
      cy={8.131}
      r={1.25}
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
      d="M4.545 12h2.32M19.467 12h-2.331"
    />
    <Circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(0 1 1 0 6.865 10.75)"
    />
    <Circle
      cx={15.886}
      cy={12}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 15.886 12)"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceLight;
