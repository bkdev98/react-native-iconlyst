import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTabletAiLight = ({
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
      d="M10.992 3h6.015a3.62 3.62 0 0 1 3.618 3.618v10.764A3.62 3.62 0 0 1 17.008 21H6.993a3.62 3.62 0 0 1-3.618-3.617v-6.764"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.33v-.048m.001-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5M5.97 8.199l-.101-.273A3.76 3.76 0 0 0 3.647 5.7L3.374 5.6l.273-.102A3.76 3.76 0 0 0 5.87 3.273l.1-.273.102.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.102A3.76 3.76 0 0 0 6.07 7.926zM11.28 9.441a1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.176 1.179A1.77 1.77 0 0 0 11.28 9.44"
    />
  </Svg>
);
export default IconlystTabletAiLight;
