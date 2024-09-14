import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2Boldsharp = ({
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
      d="M12.25 21.014a2.473 2.473 0 0 1-2.45-2.209h4.903a2.474 2.474 0 0 1-2.452 2.21m8.904-2.209-.54-.784a8.77 8.77 0 0 1-1.556-4.997v-2.793c0-3.5-2.655-6.39-6.057-6.766V1.763h-1.5v1.702c-3.403.375-6.06 3.265-6.06 6.766v2.793a8.76 8.76 0 0 1-1.556 4.997l-.54.784H8.3c.142 2.066 1.85 3.71 3.952 3.71 2.1 0 3.81-1.644 3.952-3.71z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotification2Boldsharp;
