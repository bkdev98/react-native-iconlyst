import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarLightsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 19.935v-5.411a1.997 1.997 0 0 1-2.013-1.988c0-1.102.898-1.99 2.013-1.99V5.135H3v5.49c1.115 0 2.013.81 2.013 1.91A1.997 1.997 0 0 1 3 14.525v5.41z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m12.25 9.208.983 1.864 2.076.36-1.469 1.51.3 2.087-1.89-.93-1.892.93.3-2.086-1.47-1.511 2.077-.36z"
    />
  </Svg>
);
export default IconlystTicketStarLightsharp;