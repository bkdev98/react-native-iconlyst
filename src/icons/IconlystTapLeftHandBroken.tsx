import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapLeftHandBroken = ({
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
      d="M9.716 21.306c2.422.495 5.386.059 6.63-1.488 1.173-1.459 2.085-3.23 2.66-4.817.308-.851-.144-1.768-.989-2.092a1.735 1.735 0 0 0-2.05.635l-1.136 1.647V6.087a1.587 1.587 0 0 0-3.174-.024l-.063 4.106c-2.22.212-5.437.098-6.335 2.522-.904 2.439-.014 5.668 1.57 7.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.984 9.5c1.086-.639 1.821-1.861 1.821-3.263 0-2.064-1.592-3.737-3.557-3.737S9.689 4.173 9.689 6.237c0 .463.08.907.227 1.316"
    />
  </Svg>
);
export default IconlystTapLeftHandBroken;
