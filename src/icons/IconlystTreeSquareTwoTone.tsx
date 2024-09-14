import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeSquareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.615h8.435C19.165 3.615 21 5.696 21 8.642v7.947c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.615 3 19.534 3 16.59V8.642c0-2.946 1.843-5.027 4.782-5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.108 14.863h5.784l-1.446-2.505h1.937L12 8.115l-3.383 4.243h1.937zM12 14.863v2.252"
    />
  </Svg>
);
export default IconlystTreeSquareTwoTone;
