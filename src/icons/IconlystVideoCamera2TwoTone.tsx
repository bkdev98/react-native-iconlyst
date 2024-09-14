import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCamera2TwoTone = ({
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
      d="M13.14 4.754H6.35C3.983 4.754 2.5 6.43 2.5 8.8v6.397c0 2.371 1.476 4.047 3.85 4.047h6.79c2.373 0 3.851-1.676 3.851-4.047V8.801c0-2.371-1.478-4.047-3.85-4.047"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.623 14.96h2.841"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.984 9.99 3.407-2.788a1.292 1.292 0 0 1 2.11 1l-.013 7.602a1.29 1.29 0 0 1-2.11.995l-3.394-2.787"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVideoCamera2TwoTone;
