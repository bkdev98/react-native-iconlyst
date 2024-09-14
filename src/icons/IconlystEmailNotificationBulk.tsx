import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailNotificationBulk = ({
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
      fillRule="evenodd"
      d="M17.473 10.176a.31.31 0 0 0-.33.034L12.9 13.6q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l3.803-3.035a.287.287 0 0 0 .033-.416A5.16 5.16 0 0 1 14.5 5.5c0-.384.054-.752.14-1.11A.314.314 0 0 0 14.34 4H6.8C3.9 4 1.7 6.4 1.7 9.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h8.8c1.3 0 2.5-.5 3.5-1.4 1-1 1.6-2.5 1.6-4.1v-4.737a.315.315 0 0 0-.36-.306q-.315.042-.64.043a5.1 5.1 0 0 1-2.227-.524"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.143 10.21 12.9 13.6q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l3.803-3.035a.287.287 0 0 0 .033-.416c.713.752 1.433 1.188 1.72 1.32a.31.31 0 0 0-.313.04"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.5 2.8c-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8-1.3-2.8-2.8-2.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailNotificationBulk;
