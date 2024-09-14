import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1Light = ({
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
      d="M8.37 21h7.258c2.537 0 4.116-1.791 4.116-4.325v-9.35C19.744 4.79 18.164 3 15.627 3H8.371C5.833 3 4.255 4.791 4.255 7.325v9.35C4.255 19.21 5.84 21 8.37 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.111 9.487a3.889 3.889 0 1 1 7.778 0v5.026a3.89 3.89 0 0 1-7.778 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.256V9.18m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M8.157 14.998H4.256m15.489 0h-3.91M8.107 12H4.256m15.488 0h-3.86M8.123 9.003H4.256m15.488 0h-3.876"
    />
  </Svg>
);
export default IconlystToilet1Light;
