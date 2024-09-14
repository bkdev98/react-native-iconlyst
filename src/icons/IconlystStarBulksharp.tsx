import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.278 1.889h-2.057v9.221H2v2.058h9.221v9.22h2.057v-9.22H22.5V11.11h-9.222z"
    />
    <Path
      fill={props.color}
      d="M20.225 5.618 18.77 4.164l-6.52 6.52-6.521-6.52-1.455 1.454 6.521 6.52-6.52 6.521 1.454 1.455 6.52-6.52 6.521 6.52 1.455-1.455-6.521-6.52z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarBulksharp;
