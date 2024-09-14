import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.386 4.32H8.615C4.968 4.32 2 7.29 2 10.94a6.6 6.6 0 0 0 1.544 4.244 1 1 0 1 0 1.53-1.288A4.6 4.6 0 0 1 4 10.94a4.623 4.623 0 0 1 4.615-4.62h6.771A4.623 4.623 0 0 1 20 10.94c0 2.542-2.07 4.61-4.614 4.61h-4.357l.914-.912a1 1 0 1 0-1.413-1.415l-2.623 2.62c-.071.07-.114.154-.159.238-.016.03-.041.051-.054.081a1 1 0 0 0 0 .775c.015.036.045.063.064.097.044.077.082.157.147.222l2.623 2.63a.996.996 0 0 0 1.414.002 1 1 0 0 0 .002-1.414l-.922-.924h4.364c3.647 0 6.614-2.965 6.614-6.61 0-3.65-2.967-6.62-6.614-6.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshBold;
