import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSmellOutline = ({
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
      d="M13.767 13.088a.75.75 0 0 1-.41-1.379 3.19 3.19 0 0 0 1.58-2.259c.189-1.682-1.187-2.723-2.375-3.3l-.1-.048-.11-.053a4.64 4.64 0 0 1-1.857 2.814 2.09 2.09 0 0 0-.781 1.676c.071.468.315.891.683 1.187a.75.75 0 0 1-.975 1.14 3.4 3.4 0 0 1-1.2-2.169 3.56 3.56 0 0 1 1.312-2.986c1.079-.9 1.552-1.816 1.268-2.45a.75.75 0 0 1 .798-1.076 5.8 5.8 0 0 1 1.522.571l.093.046c2.293 1.113 3.433 2.823 3.21 4.815a4.67 4.67 0 0 1-2.253 3.35.75.75 0 0 1-.405.121"
    />
    <Path
      fill={props.color}
      d="M12.55 21.796a45 45 0 0 1-6.14-.356c-2.428-.5-3.91-2.093-3.91-4.171a4.17 4.17 0 0 1 2.641-3.917 4.11 4.11 0 0 1 3.785-4.07.751.751 0 1 1 .091 1.5A2.614 2.614 0 0 0 6.64 13.45q.003.125.024.248v.033a.751.751 0 0 1-.59.909A2.635 2.635 0 0 0 4 17.267c0 1.99 2.044 2.567 2.671 2.7 3.793.45 7.626.452 11.42.006a2.89 2.89 0 0 0 2.41-2.7 2.62 2.62 0 0 0-2.08-2.627.75.75 0 0 1-.609-.825 3 3 0 0 0 .031-.366 2.615 2.615 0 0 0-2.318-2.662.753.753 0 0 1 .117-1.5 4.117 4.117 0 0 1 3.7 4.053 4.155 4.155 0 0 1 2.66 3.923 4.35 4.35 0 0 1-3.552 4.156 34.4 34.4 0 0 1-5.9.37"
    />
    <Path
      fill={props.color}
      d="M11.02 17.877a7.26 7.26 0 0 1-4.059-1.152 3.93 3.93 0 0 1-1.776-2.8.75.75 0 0 1 .656-.834.76.76 0 0 1 .833.656 2.45 2.45 0 0 0 1.139 1.746 6.27 6.27 0 0 0 4.8.694.75.75 0 1 1 .364 1.456 8 8 0 0 1-1.957.234M17.25 16.659a.75.75 0 0 1-.433-1.362 2.25 2.25 0 0 0 1-1.553.766.766 0 0 1 .832-.656.75.75 0 0 1 .656.834 3.73 3.73 0 0 1-1.622 2.6.75.75 0 0 1-.433.137M19.748 10.334a.75.75 0 0 1-.668-1.091 1.15 1.15 0 0 0 0-1.045 2.64 2.64 0 0 1 .063-2.535.752.752 0 0 1 1.246-.082.75.75 0 0 1 .054.832 1.15 1.15 0 0 0-.026 1.1 2.65 2.65 0 0 1 0 2.412.75.75 0 0 1-.669.409M5.929 7.239a.74.74 0 0 1-.57-.263.75.75 0 0 1-.097-.828 1.15 1.15 0 0 0 0-1.047 2.64 2.64 0 0 1 .063-2.531.75.75 0 0 1 1.3.75 1.15 1.15 0 0 0-.027 1.1 2.66 2.66 0 0 1 0 2.413.75.75 0 0 1-.67.406"
    />
  </Svg>
);
export default IconlystPoopSmellOutline;
