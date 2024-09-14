import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber3SquareLight = ({
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
      d="M8.283 3.383h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.946-1.834 5.027-4.783 5.027H8.283c-2.948 0-4.783-2.081-4.783-5.027V8.41c0-2.946 1.844-5.026 4.783-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.339 15.659a2.63 2.63 0 0 0 1.826.724c1.424 0 2.578-1.104 2.578-2.467s-1.154-2.468-2.578-2.468l2.585-3.065h-4.5"
    />
  </Svg>
);
export default IconlystNumber3SquareLight;
