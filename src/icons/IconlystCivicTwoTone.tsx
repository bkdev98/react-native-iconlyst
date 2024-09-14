import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCivicTwoTone = ({
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
      d="M21.32 9.3C20.15 5.7 16.73 3 12.68 3c-4.95 0-9 4.05-9 9s4.05 9 9 9c4.05 0 7.47-2.61 8.55-6.3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.837 10.697a2.072 2.072 0 1 0-4.144 0c0 .75.402 1.4.998 1.764v2.912h2.16v-2.917c.59-.366.986-1.013.986-1.759"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCivicTwoTone;
