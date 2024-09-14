import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration5Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.621 17.7c-.52 0-.95-.44-.95-.95s.43-.95.95-.95c.47 0 .95.29.95.95 0 .51-.43.95-.95.95m2.3-14.55h-4.6c-2.04 0-3.7 1.7-3.7 3.8v10.2c0 2.04 1.7 3.7 3.8 3.7h4.63c2.06-.12 3.67-1.79 3.67-3.8V6.85c0-2.04-1.7-3.7-3.8-3.7M5.34 11.626l-.798-1.162.785-1.07a.75.75 0 0 0 .019-.86l-.8-1.2a.75.75 0 1 0-1.248.832l.509.765-.79 1.077a.75.75 0 0 0-.013.868l.808 1.175-.808 1.175a.75.75 0 0 0 0 .85l.799 1.162-.488.672a.75.75 0 0 0 1.213.883l.8-1.101a.75.75 0 0 0 .012-.867l-.808-1.174.808-1.175a.75.75 0 0 0 0-.85M22.239 13.226l-.808-1.177.808-1.174a.75.75 0 0 0-.014-.868l-.789-1.077.509-.764a.75.75 0 1 0-1.248-.832l-.8 1.2a.75.75 0 0 0 .02.86l.784 1.07-.798 1.16a.75.75 0 0 0 0 .85l.808 1.176-.808 1.175a.75.75 0 0 0 .012.866l.8 1.1a.745.745 0 0 0 1.046.165.746.746 0 0 0 .166-1.045l-.488-.672.8-1.164a.75.75 0 0 0 0-.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneRingVibration5Bold;
