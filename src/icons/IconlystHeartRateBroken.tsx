import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartRateBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.784 20.999c-2.947 0-4.781-2.081-4.781-5.026V8.027c0-2.945 1.842-5.026 4.781-5.026h8.434C19.165 3.001 21 5.082 21 8.027v7.946c0 2.945-1.835 5.026-4.783 5.026H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12.217h4.738L9.44 7.109l3.415 10.225 1.247-2.77M20.997 12.215h-3.804l-1.158-1.945-.795 1.765"
    />
  </Svg>
);
export default IconlystHeartRateBroken;
