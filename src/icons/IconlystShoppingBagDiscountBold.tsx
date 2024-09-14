import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagDiscountBold = ({
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
      d="M8.706 6.877a3.263 3.263 0 0 1 3.27-3.002h.015c1.716 0 3.114 1.324 3.265 3.002zm.27 4.825a.75.75 0 0 1 .75-.75c.414 0 .763.335.763.75a.74.74 0 0 1-.738.75h-.025a.75.75 0 0 1-.75-.75m5.894.467-4.678 4.677a.746.746 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l4.677-4.676a.75.75 0 0 1 1.06 1.06m-.56 4.834h-.033a.75.75 0 0 1 0-1.5c.414 0 .767.335.767.75 0 .413-.32.75-.734.75m6.573-1.153-.736-5.7c-.531-2.413-2.088-3.273-3.368-3.273h-.023c-.154-2.505-2.222-4.502-4.762-4.502h-.022c-1.272 0-2.47.493-3.375 1.39-.841.833-1.316 1.927-1.39 3.116-1.273.018-2.891.884-3.334 3.313l-.728 5.645c-.293 1.95-.024 3.373.82 4.353.83.965 2.179 1.433 4.124 1.433h7.817c1.766 0 3.162-.535 4.038-1.546.88-1.015 1.196-2.44.939-4.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagDiscountBold;
