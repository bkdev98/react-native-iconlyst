import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNytimesTwoTone = ({
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
      d="M11.298 5.082a7.987 7.987 0 1 0 8.69 9.948"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.26 20.997V10.016l-7.844 4.337M17.493 3.176a2.496 2.496 0 0 1 1.484 4.502C15.19 10.485 9.551.428 5.057 3.641a2.496 2.496 0 0 0 .787 4.437M9.266 11.793v8.474"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 12.825v.051m.205-.04a.207.207 0 1 1-.414 0 .207.207 0 0 1 .414 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNytimesTwoTone;
