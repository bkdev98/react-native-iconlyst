import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraDisbaleOutline = ({
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
      d="M20.835 17.557c-.457-.001-.9-.16-1.254-.45l-2.612-2.142a2.42 2.42 0 0 1-.889-1.878V10.14a.7.7 0 0 1 0-.21V8.896a3.11 3.11 0 0 0-3.107-3.107H8.738a.75.75 0 1 1 0-1.5h4.232a4.613 4.613 0 0 1 4.586 4.17l2.037-1.668a1.98 1.98 0 0 1 3.235 1.536l-.01 7.248a1.983 1.983 0 0 1-1.983 1.978zm-3.258-7.173v2.7a.93.93 0 0 0 .34.718l2.614 2.142c.085.07.19.109.3.11a.483.483 0 0 0 .48-.48l.011-7.249a.479.479 0 0 0-.786-.372zM13.158 19.608H6.677a4.32 4.32 0 0 1-4.42-4.607V8.894A4.6 4.6 0 0 1 3.74 5.327a.75.75 0 0 1 .98 1.136 3.13 3.13 0 0 0-.962 2.431V15a2.8 2.8 0 0 0 2.919 3.107h6.48a2.9 2.9 0 0 0 1.983-.694.749.749 0 1 1 1.007 1.112 4.36 4.36 0 0 1-2.99 1.083"
    />
    <Path
      fill={props.color}
      d="M17.902 21.114a.74.74 0 0 1-.545-.235L1.534 4.14a.75.75 0 0 1 1.09-1.03l15.821 16.74a.75.75 0 0 1-.545 1.264z"
    />
  </Svg>
);
export default IconlystVideoCameraDisbaleOutline;
