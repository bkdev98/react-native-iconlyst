import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainTouchTwoTone = ({
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
      d="M9.555 10.117V6.545a1.508 1.508 0 1 0-3.014 0v.404M4.751 4.517a3.83 3.83 0 0 1 4.805-1.644M11.211 4.201a3.8 3.8 0 0 1 .699 2.205v2.843M6.54 10.117v-.96M4.254 9.246V6.875"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.687 19.315c-.99.52-1.297 2.186-1.297 2.186M13.643 17.196c.238.861.198 1.685 1.109 1.886l2.784.628c.652.137 1.235-.19 1.338-.875l.31-2.643a.83.83 0 0 1 .517-.619l.928-.358a.75.75 0 0 0 .334-1.175c-.712-.957-1.718-2.521-1.414-3.898.57-2.584-.531-4.527-2.414-6.115-.82-.691-1.737-1.098-2.714-1.316M4.809 12.863c1.455 2.605 2.127 5.568.884 8.402" />
    </G>
  </Svg>
);
export default IconlystAiBrainTouchTwoTone;
