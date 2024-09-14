import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountUpBold = ({
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
      fillRule="evenodd"
      d="M13.251 16.457a.946.946 0 1 1 .003-1.893.946.946 0 0 1-.003 1.893m-4.775-.128a.749.749 0 0 1-.531-1.28l4.898-4.897a.749.749 0 1 1 1.06 1.06L9.006 16.11a.75.75 0 0 1-.53.22m-.934-5.584a.947.947 0 0 1 1.893 0 .947.947 0 0 1-1.893 0M21.107 8.1a.24.24 0 0 0-.222.235v.632a2.5 2.5 0 1 1-5 0V8.41c0-.165-.133-.297-.296-.318a2.5 2.5 0 0 1-1.454-4.242l.71-.713a.3.3 0 0 0-.213-.512H7.67c-3.159 0-5.282 2.221-5.282 5.526V16.1c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526 0-2.588-.007-5.178-.008-7.767 0-.142-.13-.247-.272-.232"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.394 5.085-2.477-2.487a.74.74 0 0 0-1.051-.011q-.007.004-.013.009l-2.48 2.489a.751.751 0 0 0 1.064 1.059l1.198-1.204v4.027a.75.75 0 0 0 1.5 0V4.942l1.197 1.202a.746.746 0 0 0 1.06.002.75.75 0 0 0 .002-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountUpBold;
