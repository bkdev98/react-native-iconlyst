import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterTwoTone = ({
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
      d="M10.334 13.788V17.6c0 1.325-1.12 2.4-2.5 2.4-1.382 0-2.501-1.075-2.501-2.4V6.4c0-1.325 1.12-2.4 2.5-2.4s2.5 1.075 2.5 2.4v3.812"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.334 13.788 3.784 5.188c.792 1.086 2.351 1.35 3.482.59s1.406-2.257.614-3.343L15.134 12l3.08-4.223c.792-1.086.518-2.582-.614-3.343-1.13-.76-2.69-.496-3.482.59l-3.784 5.188"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKickstarterTwoTone;
