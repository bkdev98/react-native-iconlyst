import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainMinusLight = ({
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
      d="M12 7.36V5.435c0-1.23.99-2.228 2.213-2.228 1.172 0 2.13.917 2.207 2.078.27-.086.559-.132.857-.132a2.86 2.86 0 0 1 2.848 2.868c0 .718-.262 1.375-.696 1.878 3.567 4.084.407 8.913-3.004 8.7a2.22 2.22 0 0 1-2.212 2.192A2.22 2.22 0 0 1 12 18.565v-1.905"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.435a2.22 2.22 0 0 0-2.213-2.228A2.22 2.22 0 0 0 7.58 5.285a2.8 2.8 0 0 0-.857-.132A2.86 2.86 0 0 0 3.875 8.02c0 .718.262 1.375.696 1.878-3.567 4.084-.407 8.913 3.004 8.7a2.22 2.22 0 0 0 2.212 2.192A2.22 2.22 0 0 0 12 18.565"
    />
    <Circle
      cx={11.997}
      cy={12.001}
      r={4.63}
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
      d="M13.635 12h-3.276"
    />
  </Svg>
);
export default IconlystAiBrainMinusLight;
