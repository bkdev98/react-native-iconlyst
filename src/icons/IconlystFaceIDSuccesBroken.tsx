import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDSuccesBroken = ({
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
      d="M21.251 15.856v1.577a3.893 3.893 0 0 1-3.893 3.892H16.07M3.249 15.856v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M3.249 8.793V7.216a3.89 3.89 0 0 1 3.893-3.892h1.289M21.25 8.793V7.216a3.89 3.89 0 0 0-3.892-3.892H16.1M15.69 8.148v.612m-6.878-.612v.612M12.718 9.465v1.97c0 .524-.163.857-.61 1.13l-.304.198M8.812 15.055c2.315 1.903 4.608 1.94 6.878 0"
    />
  </Svg>
);
export default IconlystFaceIDSuccesBroken;
