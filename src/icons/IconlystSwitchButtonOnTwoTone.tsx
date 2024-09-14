import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOnTwoTone = ({
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
      d="M18.083 6.336H6.916C4.81 6.336 3.5 7.823 3.5 9.926v5.678c0 2.104 1.31 3.59 3.417 3.59h11.166c2.106 0 3.417-1.486 3.417-3.59V9.926c0-2.103-1.317-3.59-3.417-3.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.563 9.547h3.015c1.051 0 1.71.744 1.71 1.797v2.84c0 1.054-.656 1.797-1.71 1.797h-3.015c-1.054 0-1.71-.743-1.71-1.797v-2.84c0-1.053.656-1.797 1.71-1.797"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwitchButtonOnTwoTone;
