import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBottleBroken = ({
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
      d="M9.434 3v1.76c0 .542-.19 1.068-.537 1.486l-1.361 1.64a2.33 2.33 0 0 0-.537 1.486v8.835c0 1.637 1.02 2.793 2.658 2.793h4.687c1.633 0 2.658-1.156 2.658-2.793v-2.21M14.566 3v1.76c0 .542.191 1.068.537 1.486l1.362 1.64c.347.417.537.943.537 1.486v2.417M8.402 3h7.003"
    />
  </Svg>
);
export default IconlystBottleBroken;
