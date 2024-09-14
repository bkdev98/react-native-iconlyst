import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2TwoTone = ({
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
      d="M8.872 21h7.257c2.537 0 4.116-1.791 4.116-4.325v-9.35C20.245 4.79 18.665 3 16.128 3H8.872C6.334 3 4.756 4.791 4.756 7.325v9.35C4.756 19.21 6.342 21 8.872 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.45 10.22a4.004 4.004 0 0 1 3.967-4.545 4.004 4.004 0 0 1 3.968 4.545l-.718 5.27a3.28 3.28 0 0 1-6.5 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 9.482v-.077m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M6.681 12H4.756m1.95 2.998h-1.95M6.69 9.003H4.756M20.245 12h-1.93m1.93 2.998h-1.954m1.954-5.995h-1.938"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystToilet2TwoTone;
