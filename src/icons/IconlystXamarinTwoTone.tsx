import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXamarinTwoTone = ({
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
      d="M15.563 20.099H8.437a1.8 1.8 0 0 1-1.559-.9l-3.637-6.3a1.8 1.8 0 0 1 0-1.8l3.637-6.3a1.8 1.8 0 0 1 1.56-.9h7.125a1.8 1.8 0 0 1 1.559.9l3.637 6.3a1.8 1.8 0 0 1 0 1.8l-3.637 6.3a1.8 1.8 0 0 1-1.56.9"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.791 9-2.253 3.047L14.791 15M9.209 9l2.253 3.047L9.209 15"
    />
  </Svg>
);
export default IconlystXamarinTwoTone;
