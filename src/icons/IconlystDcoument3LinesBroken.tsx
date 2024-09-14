import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoument3LinesBroken = ({
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
      d="M8.044 20.999a3.754 3.754 0 0 1-3.67-3.835v-2.022M8.044 21q0 0 0 0m0 0 .09.001h7.836m-7.926-.001L15.97 21m0 0a3.814 3.814 0 0 0 3.657-3.836V8.998c0-.528-.205-1.037-.57-1.42L15.263 3.63A2.05 2.05 0 0 0 13.786 3H8.135a3.746 3.746 0 0 0-3.761 3.656v5.254"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.269 5.953a2.56 2.56 0 0 0 2.554 2.56h2.738M8.517 16.482h4.459m-4.46-3.42h6.728M8.517 9.64h2.942"
    />
  </Svg>
);
export default IconlystDcoument3LinesBroken;
