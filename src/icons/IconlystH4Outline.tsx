import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH4Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.659 9.251a.75.75 0 0 1 .532.718v5.603h.31a.75.75 0 0 1 0 1.5h-.31v1.367a.75.75 0 1 1-1.5 0v-1.367h-3.485a.75.75 0 0 1-.624-1.166l4.235-6.353a.75.75 0 0 1 .842-.302m-.968 6.32v-3.125l-2.084 3.126zM3.5 4.984a.75.75 0 0 1 .75.75v5.603h6.97V5.734a.75.75 0 1 1 1.5 0V18.44a.75.75 0 0 1-1.5 0v-5.603H4.25v5.603a.75.75 0 0 1-1.5 0V5.734a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH4Outline;
