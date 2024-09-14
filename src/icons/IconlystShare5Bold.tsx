import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare5Bold = ({
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
      fill={props.color}
      d="M8.501 4.838v-.022a2.444 2.444 0 0 1 2.44-2.44 2.444 2.444 0 0 1 2.442 2.44 2.44 2.44 0 0 1-4.406 1.447 7.2 7.2 0 0 0-4.233 4.74.749.749 0 1 1-1.445-.402A8.7 8.7 0 0 1 8.5 4.838M18.866 18.516a2.443 2.443 0 0 1-2.44-2.44 2.443 2.443 0 0 1 2.406-2.442 7.25 7.25 0 0 0-2.385-6.133.75.75 0 0 1 .995-1.123c2.166 1.916 3.242 4.851 2.845 7.714a2.44 2.44 0 0 1-1.42 4.424M5.136 20.157a2.444 2.444 0 0 1-2.442-2.442 2.444 2.444 0 0 1 2.442-2.44 2.444 2.444 0 0 1 2.236 3.418 7.25 7.25 0 0 0 5.935 1.249.749.749 0 1 1 .338 1.461 8.6 8.6 0 0 1-1.943.222 8.77 8.77 0 0 1-5.328-1.806 2.4 2.4 0 0 1-1.238.338M10.141 15.346h3.174c.49 0 .93-.254 1.176-.677s.247-.931.005-1.356l-1.576-2.769a1.35 1.35 0 0 0-1.179-.687h-.003c-.492 0-.932.255-1.178.682l-1.596 2.768a1.35 1.35 0 0 0 0 1.36c.245.425.685.678 1.177.678"
    />
  </Svg>
);
export default IconlystShare5Bold;
