import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber9SquareTwoTone = ({
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
      opacity={0.4}
    />
    <Circle
      cx={12.496}
      cy={10.95}
      r={2.406}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(180 12.496 10.95)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.082 16.543s3.09-2.227 2.81-5.808"
    />
  </Svg>
);
export default IconlystNumber9SquareTwoTone;
