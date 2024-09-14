import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1Broken = ({
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
      d="M15.629 21c2.536 0 4.115-1.791 4.115-4.325v-9.35C19.744 4.79 18.165 3 15.628 3H8.37C5.834 3 4.255 4.791 4.255 7.325v9.35C4.255 19.21 5.841 21 8.371 21h3.976"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.598a3.89 3.89 0 0 0-3.889 3.889v5.026a3.889 3.889 0 1 0 7.778 0V9.487a3.88 3.88 0 0 0-1.368-2.961"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.256v-.078m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M8.157 14.998H4.256m15.489 0h-3.91M8.107 12H4.256m15.488 0h-3.86M8.123 9.004H4.256m15.488 0h-3.876"
    />
  </Svg>
);
export default IconlystToilet1Broken;
