import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBadgeOutline = ({
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
      d="M12.25 21.75a4.1 4.1 0 0 1-1.556-.306l-2.017-.825a.93.93 0 0 0-.752.021l-.717.343a1.885 1.885 0 0 1-2.7-1.7V4.719a1.883 1.883 0 0 1 2.7-1.7l.71.34a.93.93 0 0 0 .753.022l2.022-.823a4.1 4.1 0 0 1 3.11 0l2.018.823a.92.92 0 0 0 .753-.022l.718-.342a1.883 1.883 0 0 1 2.7 1.7v14.567a1.883 1.883 0 0 1-2.7 1.7l-.71-.338a.94.94 0 0 0-.755-.023l-2.02.825a4.1 4.1 0 0 1-1.557.304m-3.927-2.7c.315 0 .628.062.92.181l2.018.825a2.6 2.6 0 0 0 1.977 0l2.022-.825a2.44 2.44 0 0 1 1.968.057l.709.34a.37.37 0 0 0 .37-.02.38.38 0 0 0 .18-.325V4.714a.382.382 0 0 0-.55-.345l-.715.34a2.44 2.44 0 0 1-1.968.059l-2.018-.823a2.6 2.6 0 0 0-1.976 0l-2.022.823a2.43 2.43 0 0 1-1.967-.058l-.71-.34a.382.382 0 0 0-.55.346v14.57a.382.382 0 0 0 .55.346l.715-.343a2.4 2.4 0 0 1 1.047-.238"
    />
    <Path
      fill={props.color}
      d="M11.35 16.52a2.634 2.634 0 1 1-.003-5.268 2.634 2.634 0 0 1 .004 5.268m0-3.768a1.134 1.134 0 1 0-.003 2.272 1.134 1.134 0 0 0 .004-2.274z"
    />
    <Path
      fill={props.color}
      d="M13.229 14.635a.75.75 0 0 1-.75-.75V8.232a.75.75 0 0 1 1.45-.269 1.87 1.87 0 0 0 1.255 1.074.751.751 0 0 1-.3 1.471 3 3 0 0 1-.907-.342v3.72a.75.75 0 0 1-.748.75"
    />
  </Svg>
);
export default IconlystSongBadgeOutline;
