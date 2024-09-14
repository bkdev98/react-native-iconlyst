import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationTwoTonecurved = ({
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
      d="M12.246 2.514c-4.434 0-6.36 4.015-6.36 6.67 0 1.984.287 1.4-.811 3.82-1.341 3.448 4.051 4.858 7.171 4.858s8.512-1.41 7.172-4.858c-1.098-2.42-.81-1.836-.81-3.82 0-2.655-1.928-6.67-6.362-6.67"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.556 20.512c-1.294 1.446-3.313 1.463-4.62 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotificationTwoTonecurved;
