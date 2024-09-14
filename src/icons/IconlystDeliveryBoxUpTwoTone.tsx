import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxUpTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.567 21H8.133c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.35 5.081 5.185 3 8.133 3h8.434c2.949 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.844 5.026-4.783 5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.044 8.955 9.38 7.283 7.715 8.955M16.984 8.955l-1.666-1.672-1.664 1.672M7.813 16.717h9.076M9.379 7.284v6.19M15.32 7.284v6.19"
    />
  </Svg>
);
export default IconlystDeliveryBoxUpTwoTone;
