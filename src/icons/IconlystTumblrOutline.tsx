import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTumblrOutline = ({
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
      fillRule="evenodd"
      d="M11.26 3.75c-.19 1.374-.87 2.875-1.81 3.822l-.019.02c-.712.666-1.446 1.026-2.18 1.317l.001 1.686h1.76a.75.75 0 0 1 .75.75v4.748c0 .659.067 1.23.265 1.798l.013.04c.42 1.46 1.983 2.34 3.64 2.315h.016c.72.005 2.166.004 3.053.004v-2.274h-1.24a2.796 2.796 0 0 1-2.797-2.796v-3.835a.75.75 0 0 1 .75-.75l3.166-.002V8.655l-3.166-.001a.75.75 0 0 1-.75-.75V3.75zm-2.998 8.345H7.014c-.696 0-1.26-.564-1.262-1.26L5.75 8.75c0-.532.33-.997.814-1.183.71-.273 1.282-.55 1.831-1.06.704-.717 1.27-1.963 1.393-3.08.067-.61.571-1.176 1.284-1.177h1.881c.698.001 1.26.567 1.26 1.262v3.642l2.654.002c.696 0 1.26.565 1.26 1.261v2.415c0 .696-.564 1.26-1.26 1.261l-2.655.002v3.085c0 .716.58 1.296 1.297 1.296h1.479c.697 0 1.261.565 1.261 1.261v2.75c0 .695-.56 1.262-1.258 1.262-.838.001-2.498.002-3.297-.003-2.084.028-4.417-1.08-5.09-3.38-.266-.77-.342-1.515-.342-2.272m0-3.999v3.999"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTumblrOutline;
