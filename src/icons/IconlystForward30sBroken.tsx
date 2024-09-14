import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward30sBroken = ({
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
      d="M18.126 16.685A8.25 8.25 0 0 1 3.343 9.942M19.581 11.813A8.25 8.25 0 0 0 4.744 7.035"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.084 9.8-1.28 2.221-2.208-1.274M6.858 10.555A1.446 1.446 0 1 1 8.304 12a1.446 1.446 0 1 1-1.446 1.446"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.474 14.846a1.685 1.685 0 0 1-1.685-1.685v-2.323a1.685 1.685 0 0 1 3.37 0v2.323c0 .93-.754 1.685-1.685 1.685"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward30sBroken;
