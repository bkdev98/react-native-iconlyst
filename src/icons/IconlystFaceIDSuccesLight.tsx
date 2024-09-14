import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDSuccesLight = ({
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
      d="M21.001 16.152v1.577a3.893 3.893 0 0 1-3.893 3.892H15.82M2.999 16.152v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M2.999 9.09V7.513a3.89 3.89 0 0 1 3.893-3.892h1.289M21 9.09V7.513a3.89 3.89 0 0 0-3.892-3.892H15.85M8.562 8.445v.612m6.878-.612v.612zM12.468 9.762v1.97c0 .523-.163.857-.61 1.13l-.304.198M8.562 15.352c2.315 1.903 4.608 1.94 6.878 0"
    />
  </Svg>
);
export default IconlystFaceIDSuccesLight;
