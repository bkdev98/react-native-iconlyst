import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSendBulk = ({
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
      d="M20.278 11.76q.162 0 .322.008a.31.31 0 0 0 .326-.304v-3.71c0-2.303-1.48-3.85-3.687-3.85H5.614c-2.206 0-3.688 1.547-3.688 3.85v7.4c0 2.303 1.482 3.85 3.689 3.85h7.286c.17 0 .304-.14.305-.31q0-.11.005-.22a7.074 7.074 0 0 1 7.066-6.715"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.013 16.925c-.01-.026-.033-.045-.047-.07-.033-.059-.063-.12-.112-.169l-2.136-2.14a.749.749 0 1 0-1.062 1.058l.86.862h-3.243a.75.75 0 0 0 0 1.5h3.236l-.85.848a.75.75 0 0 0 1.057 1.063l2.136-2.13a.745.745 0 0 0 .161-.822M11.426 14.494a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.538-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.044 8.654H5.64a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperSendBulk;
