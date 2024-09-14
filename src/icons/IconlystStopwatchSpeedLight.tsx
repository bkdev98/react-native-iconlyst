import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchSpeedLight = ({
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
      d="M8.67 21 12.638 21a7.662 7.662 0 0 0 0-15.323 7.66 7.66 0 0 0-7.66 7.66M6.186 18.467h4.291M3.703 15.934h4.292M10.535 3h4.207M12.627 13.308l2.94-2.94"
    />
  </Svg>
);
export default IconlystStopwatchSpeedLight;
