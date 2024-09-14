import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameBroken = ({
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
      d="M8 3H5a1.5 1.5 0 0 0-1.5 1.5v6l.75 1.5v6.75a1.5 1.5 0 0 0 1.5 1.5h6.75L14 21h6a1.5 1.5 0 0 0 1.5-1.5v-3M11 3l1.5.75h6.75a1.5 1.5 0 0 1 1.5 1.5V12l.75 1.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.938 15.563h7.124V8.436H8.938V12"
    />
  </Svg>
);
export default IconlystFrameBroken;
