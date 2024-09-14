import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet3TwoTone = ({
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
      d="M8.872 10.372a3.662 3.662 0 1 1 7.256 0l-.656 4.819a3 3 0 0 1-5.943 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 9.682v-.077m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M6.754 9.812v3.834M18.238 9.812v3.834"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystToilet3TwoTone;
