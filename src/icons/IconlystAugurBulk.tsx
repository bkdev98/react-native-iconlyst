import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAugurBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.886 17.047 3.667-2.2a.75.75 0 0 0 .286-.979l-.733-1.47a.75.75 0 1 0-1.343.669l.423.85-2.686 1.611-2.686-1.61.424-.85a.75.75 0 1 0-1.342-.67l-.734 1.47a.75.75 0 0 0 .286.979l3.667 2.2a.75.75 0 0 0 .771 0M11.86 7.218l-1.88 3.129a.75.75 0 0 0 .256 1.03.75.75 0 0 0 1.03-.258l1.236-2.057 1.23 2.056a.747.747 0 0 0 1.028.258.75.75 0 0 0 .26-1.027l-1.873-3.13a.75.75 0 0 0-1.287-.001"
    />
  </Svg>
);
export default IconlystAugurBulk;
