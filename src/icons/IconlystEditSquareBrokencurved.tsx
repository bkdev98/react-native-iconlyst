import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBrokencurved = ({
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
      d="M12.25 21.25c6.937 0 9.25-2.313 9.25-9.25M12.25 2.75C5.313 2.75 3 5.063 3 12c0 5.553 1.482 8.143 5.632 8.955"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.78 4.304a2.4 2.4 0 0 0-3.39.206l-5.884 6.648c-1.517 1.712-.405 4.077-.405 4.077s2.504.793 3.998-.895l5.886-6.647a2.4 2.4 0 0 0-.206-3.389"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.26 5.801 1.812 1.605"
    />
  </Svg>
);
export default IconlystEditSquareBrokencurved;
