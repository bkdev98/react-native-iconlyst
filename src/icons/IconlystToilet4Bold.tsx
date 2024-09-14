import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet4Bold = ({
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
      d="m16.713 10.287-.085.623a.3.3 0 0 0 .298.34h3.268a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3h-3.17a.297.297 0 0 0-.295.297q0 .12-.016.24M7.788 10.287a2 2 0 0 1-.016-.24.296.296 0 0 0-.295-.297h-3.17a.3.3 0 0 0-.3.3v.9a.3.3 0 0 0 .3.3h3.269a.3.3 0 0 0 .297-.34zM8.159 13.01a.3.3 0 0 0-.297-.26H4.306a.3.3 0 0 0-.3.3v.9a.3.3 0 0 0 .3.3h3.678a.3.3 0 0 0 .297-.34zM12.25 18.83c-1.73 0-3.22-1.195-3.646-2.837a.32.32 0 0 0-.302-.243H4.306a.3.3 0 0 0-.3.3v1.599c0 .657.244 1.285.687 1.769l1.127 1.228a2.62 2.62 0 0 0 1.933.854h8.993a2.62 2.62 0 0 0 1.931-.853l1.127-1.228a2.6 2.6 0 0 0 .69-1.77V16.05a.3.3 0 0 0-.3-.3H16.2a.32.32 0 0 0-.302.242c-.426 1.643-1.916 2.838-3.647 2.838M19.804 4.582l-1.127-1.229a2.62 2.62 0 0 0-1.931-.853H7.753c-.732 0-1.436.311-1.931.852l-1.128 1.23a2.6 2.6 0 0 0-.688 1.768v1.6a.3.3 0 0 0 .3.3h3.472a.31.31 0 0 0 .29-.203c.184-.478.443-.93.788-1.324a4.506 4.506 0 0 1 6.79 0c.345.395.604.845.788 1.324.046.12.16.203.289.203h3.47a.3.3 0 0 0 .3-.3v-1.6c0-.658-.244-1.286-.69-1.768M16.22 13.91a.3.3 0 0 0 .297.34h3.677a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3H16.64a.3.3 0 0 0-.297.26z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.402 9.4a1.15 1.15 0 1 0-2.3.003 1.15 1.15 0 0 0 2.3-.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet4Bold;
