import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeLight = ({
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
      d="M6.785 21h10.431a3.32 3.32 0 0 0 3.322-3.323v-7.173c0-.89-.401-1.734-1.092-2.298l-5.574-4.54a2.96 2.96 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.298v7.173A3.32 3.32 0 0 0 6.785 21M12.002 16.274v.042"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.184 11.66a6.115 6.115 0 0 1 7.634 0M10.06 14.018a3.015 3.015 0 0 1 3.888-.006"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeLight;
