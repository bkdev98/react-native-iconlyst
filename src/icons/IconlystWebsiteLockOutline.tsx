import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteLockOutline = ({
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
      d="M9.868 21.414H8.177c-3.211 0-5.368-2.252-5.368-5.6V8.14c0-3.352 2.157-5.6 5.368-5.6h8.147c3.21 0 5.368 2.252 5.368 5.6v4.856a.75.75 0 0 1-1.5 0V8.14c0-2.494-1.518-4.1-3.869-4.1H8.177c-2.35 0-3.868 1.61-3.868 4.1v7.675c0 2.494 1.518 4.1 3.868 4.1h1.69a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M11.95 7.383h-.01a.75.75 0 1 1 .01 0m-2.486 0h-.01a.75.75 0 1 1 .01 0m-2.486 0h-.01a.75.75 0 1 1 .01 0M20.942 10.297H3.559a.75.75 0 1 1 0-1.5h17.383a.75.75 0 1 1 0 1.5M18.062 22.029h-3.25a2.367 2.367 0 0 1-2.365-2.364V17.84a2.366 2.366 0 0 1 2.364-2.363h3.251a2.367 2.367 0 0 1 2.364 2.363v1.825a2.367 2.367 0 0 1-2.364 2.364m-3.25-5.052a.865.865 0 0 0-.865.863v1.825a.865.865 0 0 0 .864.864h3.251a.865.865 0 0 0 .864-.864V17.84a.865.865 0 0 0-.864-.863z"
    />
    <Path
      fill={props.color}
      d="M18.377 17.01a.75.75 0 0 1-.75-.75v-1.2a1.19 1.19 0 0 0-1.191-1.166h-.015a1.185 1.185 0 0 0-1.171 1.169v1.2a.75.75 0 1 1-1.5 0v-1.21a2.68 2.68 0 0 1 2.656-2.658h.033a2.694 2.694 0 0 1 2.692 2.657v1.21a.75.75 0 0 1-.754.748"
    />
  </Svg>
);
export default IconlystWebsiteLockOutline;
