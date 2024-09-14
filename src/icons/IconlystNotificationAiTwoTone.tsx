import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationAiTwoTone = ({
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
      d="M12 3a6.566 6.566 0 0 1 6.567 6.566v1.319c0 .78.173 1.55.504 2.255l.466.99c.713 1.514-.392 3.255-2.065 3.255H6.528c-1.673 0-2.778-1.74-2.065-3.255l.466-.99a5.3 5.3 0 0 0 .504-2.255"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.9 17.9a3.1 3.1 0 1 0 6.199 0M7.6 8.657l-.1-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102A3.76 3.76 0 0 0 7.5 3.731l.1-.273.102.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM12.778 10.581a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotificationAiTwoTone;
