import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDSuccesTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.501 15.815v1.576a3.893 3.893 0 0 1-3.893 3.892H16.32M3.499 15.815v1.576a3.893 3.893 0 0 0 3.893 3.892h1.257M3.499 8.752V7.175a3.89 3.89 0 0 1 3.893-3.892h1.289M21.5 8.752V7.175a3.89 3.89 0 0 0-3.892-3.892H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.062 8.107v.612m6.878-.612v.612zM12.968 9.424v1.97c0 .523-.163.857-.61 1.13l-.304.198M9.062 15.014c2.315 1.903 4.608 1.94 6.878 0"
    />
  </Svg>
);
export default IconlystFaceIDSuccesTwoTone;
