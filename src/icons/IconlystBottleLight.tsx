import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBottleLight = ({
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
      d="M9.433 3v1.76c0 .542-.19 1.068-.537 1.486l-1.36 1.64a2.33 2.33 0 0 0-.538 1.486v8.835c0 1.637 1.02 2.793 2.658 2.793h4.687c1.634 0 2.658-1.156 2.658-2.793V9.372c0-.543-.19-1.07-.537-1.487l-1.361-1.64a2.33 2.33 0 0 1-.537-1.486V3M8.402 3h7.003"
    />
  </Svg>
);
export default IconlystBottleLight;
