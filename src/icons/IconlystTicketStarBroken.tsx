import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBroken = ({
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
      d="M12 20.417h5.857a3.393 3.393 0 0 0 3.393-3.39v-2.703a2.24 2.24 0 0 1-.001-4.478l.001-2.7a3.39 3.39 0 0 0-3.388-3.396H6.144A3.394 3.394 0 0 0 2.75 7.142v2.791a2.163 2.163 0 0 1 2.239 2.152 2.237 2.237 0 0 1-2.233 2.24H2.75v2.7a3.39 3.39 0 0 0 3.391 3.392h1.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.987 10.31-.616-1.247a.415.415 0 0 0-.744 0l-.615 1.247a.42.42 0 0 1-.312.227l-1.377.201a.414.414 0 0 0-.229.707l.995.97a.41.41 0 0 1 .12.367l-.235 1.37a.415.415 0 0 0 .602.437l1.23-.647a.41.41 0 0 1 .386 0l1.231.647a.414.414 0 0 0 .601-.437l-.235-1.37a.42.42 0 0 1 .12-.367l.996-.97"
    />
  </Svg>
);
export default IconlystTicketStarBroken;
