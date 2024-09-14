import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber9SquareLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.283 3.543h8.435c2.948 0 4.782 2.08 4.782 5.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.081-4.783-5.026V8.569c0-2.946 1.844-5.026 4.783-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.06 16.541h.729a3.104 3.104 0 0 0 3.104-3.104V11.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.106 10.936a2.393 2.393 0 1 1 4.786 0 2.393 2.393 0 0 1-4.786 0"
    />
  </Svg>
);
export default IconlystNumber9SquareLight;
