import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShipBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.34 3.495c0-.827-.672-1.5-1.5-1.5h-1.685c-.827 0-1.5.673-1.5 1.5v.557c0 .11.09.2.2.2h4.286a.2.2 0 0 0 .2-.2zM17.377 9.144a.2.2 0 0 0 .27-.187V6.8c0-.827-.673-1.5-1.5-1.5h-8.31c-.827 0-1.5.673-1.5 1.5v2.165a.2.2 0 0 0 .27.187l4.16-1.566a3.52 3.52 0 0 1 2.464 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.619 11.656a1.506 1.506 0 0 0-.935 1.706l.919 4.51a4.51 4.51 0 0 0 3.45 3.498l3.989.87c.104.023.202-.075.202-.181V9.072a.2.2 0 0 0-.26-.19c-2.486.807-4.92 1.854-7.365 2.774M20.377 11.654c-2.444-.92-4.884-1.998-7.377-2.78a.2.2 0 0 0-.258.191l.002 12.98c0 .114.105.218.217.195l3.988-.87a4.51 4.51 0 0 0 3.449-3.498l.919-4.51a1.51 1.51 0 0 0-.94-1.708"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShipBold;
