import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GSquareBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.474 13.47c0 1.228-.853 1.96-2.28 1.96a3.14 3.14 0 0 1-2.29-.959c-.651-.68-.987-1.618-.944-2.642a3.5 3.5 0 0 1 1.128-2.419c.638-.582 1.454-.883 2.279-.838.47.024.925.144 1.35.357a.75.75 0 1 1-.67 1.342 1.9 1.9 0 0 0-.757-.201 1.66 1.66 0 0 0-1.19.448c-.387.352-.62.853-.642 1.373-.024.603.168 1.165.53 1.541.312.326.729.498 1.207.498.779 0 .779-.244.779-.46v-.72h-.78a.75.75 0 0 1 0-1.5h1.53a.75.75 0 0 1 .75.75zM8.64 15.45a2.38 2.38 0 0 1-1.981-1.075.75.75 0 0 1 .209-1.039.75.75 0 0 1 1.039.209.87.87 0 0 0 .733.405.92.92 0 0 0 .919-.919.6.6 0 0 0-.6-.601H7.477a.748.748 0 0 1-.745-.834L7 9.216a.75.75 0 0 1 .745-.666h2.333a.75.75 0 1 1 0 1.5H8.415l-.1.88h.645c1.158 0 2.099.942 2.099 2.101a2.42 2.42 0 0 1-2.42 2.419M16.22 2.5H7.786c-3.16 0-5.283 2.223-5.283 5.531v7.939c0 3.308 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst5GSquareBold;
