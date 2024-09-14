import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotificationLight = ({
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
      d="M12.497 3.693h-4.93C4.747 3.693 3 5.69 3 8.508v7.566c0 2.819 1.714 4.807 4.567 4.807h8.05c2.819 0 4.567-1.988 4.567-4.807v-4.716"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.645 3.12a2.356 2.356 0 1 1 0 4.712 2.356 2.356 0 0 1 0-4.712"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewNotificationLight;
