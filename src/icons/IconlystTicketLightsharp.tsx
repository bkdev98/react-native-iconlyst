import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketLightsharp = ({
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
      d="M13.96 4.832V7.07M13.96 17.328V19.2M13.96 14.15V9.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 19.4v-5.41A1.997 1.997 0 0 1 19.487 12c0-1.1.898-1.988 2.013-1.988V4.6H3v5.49c1.115 0 2.013.81 2.013 1.91A1.997 1.997 0 0 1 3 13.99v5.41z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketLightsharp;
