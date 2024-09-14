import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeSquareBroken = ({
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
      d="M7.782 21.615C4.834 21.615 3 19.534 3 16.59V8.642c0-2.946 1.843-5.027 4.782-5.027h8.435C19.165 3.615 21 5.696 21 8.642v7.947c0 2.945-1.835 5.026-4.784 5.026h-4.217"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.383 12.358h-1.937l1.446 2.505H9.108l1.446-2.505H8.617L12 8.115l1.691 2.122M12 14.863v2.252"
    />
  </Svg>
);
export default IconlystTreeSquareBroken;
