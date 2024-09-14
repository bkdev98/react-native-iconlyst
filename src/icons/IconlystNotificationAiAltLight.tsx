import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationAiAltLight = ({
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
      d="M9.933 19.975A2.69 2.69 0 0 0 12.029 21a2.69 2.69 0 0 0 2.106-1.026M15.712 4.3A5.8 5.8 0 0 0 11.999 3C8.51 3 6.234 5.847 6.234 8.35c0 3.204-1.57 3.038-1.57 5.647.218 2.614 2.47 3.265 7.335 3.265s7.116-.643 7.335-3.265c0-1.323-.403-1.933-.8-2.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.528 7.531-.1.274a3.76 3.76 0 0 1-2.223 2.225l-.273.1.273.102a3.76 3.76 0 0 1 2.222 2.225l.101.273.101-.273a3.76 3.76 0 0 1 2.222-2.225l.273-.101-.273-.101a3.76 3.76 0 0 1-2.222-2.225zM19.084 5.623A1.77 1.77 0 0 1 17.907 6.8a1.77 1.77 0 0 1 1.177 1.178 1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.178"
    />
  </Svg>
);
export default IconlystNotificationAiAltLight;
