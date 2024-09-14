import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceSatelliteOutline = ({
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
      fillRule="evenodd"
      d="M7.513 4.586a3.15 3.15 0 1 1 0 6.299 3.15 3.15 0 0 1 0-6.3m4.65 3.15a4.65 4.65 0 1 0-9.299 0 4.65 4.65 0 0 0 9.299 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.581 8.463a.75.75 0 0 0-.39.986l5.066 11.71a.75.75 0 0 0 1.376-.596L4.567 8.853a.75.75 0 0 0-.986-.39M8.673 3.974a.75.75 0 0 0 .372.993l12.259 5.575a.75.75 0 0 0 .62-1.366L9.667 3.602a.75.75 0 0 0-.993.372M10.833 6.766a.75.75 0 0 0 .103 1.056l6.255 5.148a.75.75 0 0 0 .953-1.158L11.89 6.664a.75.75 0 0 0-1.056.102M7.501 8.987a.75.75 0 0 0-.104 1.056l8.953 10.918a.75.75 0 0 0 1.16-.95L8.557 9.09A.75.75 0 0 0 7.5 8.988"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceSatelliteOutline;
