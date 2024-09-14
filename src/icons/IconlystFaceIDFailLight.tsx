import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDFailLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 16.152v1.578a3.893 3.893 0 0 1-3.893 3.892h-1.289M3 16.152v1.577a3.893 3.893 0 0 0 3.893 3.892H8.15M3 9.091V7.513a3.893 3.893 0 0 1 3.893-3.892h1.289M21 9.091V7.513a3.893 3.893 0 0 0-3.893-3.892H15.85M8.56 8.242v.612m6.878-.612v.612zM8.56 17c2.316-1.903 4.608-1.94 6.878 0M12.469 9.558v1.97c0 .523-.163.857-.61 1.13l-.304.197"
    />
  </Svg>
);
export default IconlystFaceIDFailLight;
