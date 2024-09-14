import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlumTwoTone = ({
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
      d="M18.275 13.79c0 3.849-2.81 7.21-6.275 7.21s-6.275-3.361-6.275-7.21S8.535 7.384 12 7.384s6.275 2.56 6.275 6.408"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.908 16.325c1.08-2.72 2.163-9.117-2.136-12.95" />
      <Path d="M13.483 7.796c.37-1.287-.542-5.332 4.609-4.736-.218 1.09.628 4.082-4.61 4.736" />
    </G>
  </Svg>
);
export default IconlystPlumTwoTone;
