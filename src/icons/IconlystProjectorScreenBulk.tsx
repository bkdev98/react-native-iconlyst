import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenBulk = ({
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
      d="M10.45 7.611H5.5a3 3 0 0 0-3 3v3.938a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V10.61a3 3 0 0 0-3-3h-.94a3.992 3.992 0 1 1-7.11 0"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.005 4.686a4.742 4.742 0 1 0 .001 9.483 4.742 4.742 0 0 0 0-9.483m-3.24 4.74a3.242 3.242 0 1 1 6.483.002 3.242 3.242 0 0 1-6.484-.001m4.232-2.349a.75.75 0 1 0-.584 1.382c.264.111.474.33.575.599a.75.75 0 0 0 1.405-.525 2.56 2.56 0 0 0-1.396-1.456m-9.546 4.757a.75.75 0 0 1 .75-.75h.94a.75.75 0 0 1 0 1.5H6.2a.75.75 0 0 1-.75-.75m-.598 6.353.38-.65q.132.012.267.012h1.464l-.817 1.395a.75.75 0 1 1-1.294-.757m12.945.757-.817-1.395H18.5q.108 0 .215-.008l.377.646a.75.75 0 0 1-1.294.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProjectorScreenBulk;
