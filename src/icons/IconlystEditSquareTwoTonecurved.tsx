import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareTwoTonecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.146c-6.937 0-9.25 2.313-9.25 9.25s2.313 9.25 9.25 9.25 9.25-2.313 9.25-9.25"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.529 4.7a2.4 2.4 0 0 0-3.39.206l-5.883 6.648c-1.517 1.712-.405 4.077-.405 4.077s2.503.793 3.997-.895l5.887-6.647a2.4 2.4 0 0 0-.206-3.39"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.009 6.197 3.595 3.183"
    />
  </Svg>
);
export default IconlystEditSquareTwoTonecurved;
