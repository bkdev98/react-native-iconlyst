import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.96 4.63c-1.036-1.252-2.585-2.174-4.71-2.174-4.434 0-6.361 4.015-6.361 6.67 0 1.983.288 1.4-.81 3.82-1.341 3.448 4.05 4.858 7.17 4.858s8.513-1.41 7.173-4.858c-1.1-2.42-.811-1.837-.811-3.82M14.56 20.454c-1.295 1.446-3.314 1.463-4.62 0"
    />
  </Svg>
);
export default IconlystNotificationBrokencurved;
