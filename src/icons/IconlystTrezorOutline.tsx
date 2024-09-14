import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrezorOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.368 9.02c1.932-.48 3.952-.48 5.883 0h.002l2.151.54a2.265 2.265 0 0 1 1.715 2.196v5.456c0 .858-.485 1.642-1.252 2.026l-4.545 2.272a2.27 2.27 0 0 1-2.025 0l-4.545-2.272A2.27 2.27 0 0 1 5.5 17.212v-5.456c0-1.039.707-1.945 1.715-2.197zm.362 1.456-2.15.538a.765.765 0 0 0-.58.742v5.456c0 .29.164.555.423.684l4.544 2.273a.77.77 0 0 0 .685 0l4.544-2.273a.77.77 0 0 0 .423-.684v-5.456a.765.765 0 0 0-.579-.742l-2.15-.538a10.7 10.7 0 0 0-5.16 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.31 3.75a3.795 3.795 0 0 0-3.794 3.795v2.65a.75.75 0 0 1-1.5 0v-2.65a5.295 5.295 0 0 1 10.589 0v2.65a.75.75 0 0 1-1.5 0v-2.65A3.795 3.795 0 0 0 12.31 3.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrezorOutline;
