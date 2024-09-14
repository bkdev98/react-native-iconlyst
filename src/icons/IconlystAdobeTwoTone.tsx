import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeTwoTone = ({
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
      d="M12.279 10.565a.3.3 0 0 0-.557-.002l-2.27 5.763a.3.3 0 0 0 .278.412h1.505a1 1 0 0 1 .93.633l.628 1.801a1 1 0 0 1-.93 1.367h-7.4a1 1 0 0 1-.931-1.362L9.386 4.099a1 1 0 0 1 .932-.638h1.644"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.279 10.565 3.7 9.342a1 1 0 0 0 .93.632h2.626a1 1 0 0 0 .93-1.366L14.537 4.095a1 1 0 0 0-.931-.634h-1.644"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAdobeTwoTone;
