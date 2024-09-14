import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFanSpeedCircleLight = ({
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
    <Circle
      cx={12.25}
      cy={12.885}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.019 14.598c.7.96-.61 1.795-.623 2.777-.01.708.442 1.195 1.12 1.331 3.065.617 4.599-2.987 1.846-4.679l-1.288-.653M11.48 11.173c-.7-.96.61-1.796.623-2.777.01-.708-.442-1.195-1.12-1.332-3.065-.616-4.599 2.988-1.846 4.68l1.287.653M10.537 13.655c-.96.7-1.795-.61-2.777-.623-.708-.01-1.195.442-1.331 1.121-.617 3.064 2.987 4.598 4.679 1.845l.653-1.287M13.962 12.116c.96-.701 1.796.609 2.777.623.708.01 1.195-.443 1.331-1.121.617-3.064-2.987-4.598-4.679-1.846l-.653 1.288"
    />
    <Circle
      cx={12.249}
      cy={12.885}
      r={1.883}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystFanSpeedCircleLight;
