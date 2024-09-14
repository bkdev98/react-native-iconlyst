import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M17.857 20.417a3.393 3.393 0 0 0 3.393-3.39v-2.703a2.24 2.24 0 0 1 0-4.478h0v-2.7a3.39 3.39 0 0 0-3.388-3.396H6.144A3.394 3.394 0 0 0 2.75 7.142v2.791a2.163 2.163 0 0 1 2.237 2.086l.002.066a2.237 2.237 0 0 1-2.233 2.24H2.75v2.7a3.39 3.39 0 0 0 3.391 3.392h11.716" />
      <Path d="m12.371 9.063.616 1.247c.06.122.176.207.311.227l1.377.201c.341.05.476.468.23.707l-.996.97a.42.42 0 0 0-.12.367l.235 1.37a.414.414 0 0 1-.6.437l-1.232-.647a.41.41 0 0 0-.386 0l-1.23.647a.415.415 0 0 1-.602-.437l.235-1.37a.41.41 0 0 0-.12-.367l-.995-.97a.414.414 0 0 1 .23-.707l1.376-.2a.42.42 0 0 0 .312-.228l.615-1.247a.415.415 0 0 1 .744 0" />
    </G>
  </Svg>
);
export default IconlystTicketStarLight;
