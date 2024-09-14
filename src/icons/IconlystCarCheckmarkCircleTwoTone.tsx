import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCheckmarkCircleTwoTone = ({
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
      d="M12.25 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9c0 .959-.15 1.883-.427 2.75"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.25 18.6-2.4 2.4-1.44-1.44M7.854 10.746a31.3 31.3 0 0 0 8.782 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.856 15.212c-.001.27.218.49.488.49h1.177c.27 0 .49-.218.49-.488v-.2c0-.27.218-.49.488-.49h3.5c.27 0 .488.22.488.49v.2c0 .27.219.489.489.489h1.181c.27 0 .489-.22.489-.49V12.66c0-.396-.127-.782-.36-1.101l-.57-.764a.9.9 0 0 1-.11-.21l-.512-1.423a1.1 1.1 0 0 0-.845-.708 12.8 12.8 0 0 0-3.993 0 1.1 1.1 0 0 0-.84.708l-.513 1.424a.8.8 0 0 1-.109.2l-.58.797c-.228.316-.351.696-.35 1.087z"
    />
  </Svg>
);
export default IconlystCarCheckmarkCircleTwoTone;
