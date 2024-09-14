import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJumpRopeBulk = ({
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
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M14.7 19.048a3.43 3.43 0 0 1-2.44-1.01 3.42 3.42 0 0 1-1.01-2.44v-7.2c0-.513-.208-1.016-.571-1.379-.735-.732-2.03-.73-2.76.001a1.96 1.96 0 0 0-.57 1.378v5.4a.75.75 0 0 1-1.5 0v-5.4c0-.922.359-1.788 1.01-2.439a3.48 3.48 0 0 1 2.44-1.01c.92 0 1.787.358 2.44 1.01a3.47 3.47 0 0 1 1.01 2.44v7.2c0 .512.209 1.015.57 1.378.733.731 2.027.733 2.76 0 .363-.364.57-.866.57-1.379v-5.4a.75.75 0 0 1 1.5 0v5.4a3.47 3.47 0 0 1-1.01 2.44 3.43 3.43 0 0 1-2.44 1.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.6 13.05a2.553 2.553 0 0 0-2.55 2.55v3.6a2.553 2.553 0 0 0 2.55 2.55 2.554 2.554 0 0 0 2.551-2.55v-3.6a2.554 2.554 0 0 0-2.55-2.55M17.4 2.25a2.554 2.554 0 0 0-2.551 2.55v3.6a2.554 2.554 0 0 0 2.55 2.55 2.553 2.553 0 0 0 2.55-2.55V4.8a2.553 2.553 0 0 0-2.55-2.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJumpRopeBulk;
