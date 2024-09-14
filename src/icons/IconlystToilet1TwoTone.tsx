import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1TwoTone = ({
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
      d="M8.87 21h7.258c2.537 0 4.116-1.791 4.116-4.325v-9.35C20.244 4.79 18.664 3 16.127 3H8.871C6.333 3 4.755 4.791 4.755 7.325v9.35C4.755 19.21 6.34 21 8.87 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.611 9.487a3.889 3.889 0 1 1 7.778 0v5.026a3.89 3.89 0 0 1-7.778 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 9.256V9.18m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M8.657 14.998H4.756m15.489 0h-3.91M8.607 12H4.756m15.488 0h-3.86M8.623 9.003H4.756m15.488 0h-3.876"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystToilet1TwoTone;
