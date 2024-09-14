import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTwoTone = ({
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
      d="m17.436 4.098.76-.364c.799-.382 1.723.2 1.722 1.086l-.01 12.256c0 2.423-1.348 3.924-3.766 3.924h-7.3C6.419 21 5.1 19.499 5.1 17.076L5.082 4.823a1.203 1.203 0 0 1 1.723-1.087l.754.361c.454.218.978.234 1.444.043l2.147-.875a3.57 3.57 0 0 1 2.7 0l2.142.875c.466.19.99.175 1.444-.042"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.672 9.803h2.889m-2.89 4.394h5.658"
    />
  </Svg>
);
export default IconlystReceiptBillTwoTone;
