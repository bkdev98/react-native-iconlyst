import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJumpRopeTwoTone = ({
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
      d="M8.4 15.6a1.8 1.8 0 0 0-3.6 0v3.6a1.8 1.8 0 0 0 3.6 0zM19.2 4.8a1.8 1.8 0 0 0-3.6 0v3.6a1.8 1.8 0 0 0 3.6 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.6 13.8V8.4a2.7 2.7 0 0 1 2.7-2.7v0A2.7 2.7 0 0 1 12 8.4v7.2a2.7 2.7 0 0 0 5.4 0v-5.4"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystJumpRopeTwoTone;
