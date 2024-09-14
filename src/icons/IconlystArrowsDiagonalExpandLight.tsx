import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalExpandLight = ({
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
      d="M10.766 6.909a1.8 1.8 0 0 0 1.8 1.8h.18l-4.037 4.037v-.18a1.8 1.8 0 0 0-3.6 0v4.525a1.8 1.8 0 0 0 1.8 1.8h4.525a1.8 1.8 0 0 0 0-3.6h-.18l4.037-4.036v.18a1.8 1.8 0 0 0 3.6 0V6.908a1.79 1.79 0 0 0-.93-1.577 1.8 1.8 0 0 0-.87-.223h-4.525a1.8 1.8 0 0 0-1.8 1.8"
    />
  </Svg>
);
export default IconlystArrowsDiagonalExpandLight;
