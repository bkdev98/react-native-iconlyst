import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillBold = ({
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
      fill={props.color}
      d="M4.457 11.016c0 .2-.192.343-.37.253a2.17 2.17 0 0 1-1.202-1.942v-4.54c0-1.196.973-2.17 2.169-2.17h13.894c1.194 0 2.168.974 2.168 2.17v4.54c0 .851-.493 1.59-1.208 1.945-.178.089-.37-.055-.37-.254l-.005-3.693a1.5 1.5 0 0 0-1.5-1.498H5.96a1.5 1.5 0 0 0-1.5 1.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.747 21.133a3.28 3.28 0 0 0 2.506 0l1.687-.684a.92.92 0 0 1 .739.025l.591.28c.456.218.98.186 1.402-.083.42-.266.671-.722.67-1.219L18.329 7.56a.5.5 0 0 0-.5-.499H6.165a.5.5 0 0 0-.5.5l-.008 11.892c0 .497.25.952.672 1.218a1.44 1.44 0 0 0 1.397.085l.606-.284a.9.9 0 0 1 .73-.025zm2.02-8.396H9.694a.75.75 0 0 1 0-1.5h3.075a.75.75 0 0 1 0 1.5m1.539 3.58H9.693a.75.75 0 0 1 0-1.5h4.613a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillBold;
