import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePlayTwoTone = ({
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
      d="M3.695 18.748V5.253A2.253 2.253 0 0 1 7.05 3.288l12.107 6.786a2.255 2.255 0 0 1-.01 3.936L7.04 20.716a2.252 2.252 0 0 1-3.345-1.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.42 8.54 4.336 20.291M16.459 15.495l-3.6-3.493-8.523-8.299"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGooglePlayTwoTone;
