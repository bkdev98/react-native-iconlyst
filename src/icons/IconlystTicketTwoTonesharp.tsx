import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketTwoTonesharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M13.96 4.832v2.239M13.96 17.328V19.2M13.96 14.429v-4.46"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 19.4v-5.41A1.997 1.997 0 0 1 19.487 12c0-1.101.898-1.99 2.013-1.99v-5.41H3v5.489c1.115 0 2.013.81 2.013 1.911A1.997 1.997 0 0 1 3 13.99V19.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketTwoTonesharp;
