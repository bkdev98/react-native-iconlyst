import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartBold = ({
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
      d="M8.881 19.138c-.679 0-1.232.552-1.232 1.231a1.233 1.233 0 0 0 2.464 0c0-.679-.553-1.23-1.232-1.23M18.092 19.138c-.679 0-1.232.552-1.232 1.231a1.232 1.232 0 1 0 1.232-1.231M16.29 15.04l-1.5.2.41-8.65 1.5.02zm-5.2.71-.89-9.23 1.51.02.87 9.01zm10.29-9.49c-.36-.48-.9-.72-1.51-.75l-13.52.11-.62-2.64A.76.76 0 0 0 5 2.4H3a.749.749 0 1 0 0 1.5h1.4l2.52 10.65c.32 1.36 1.54 2.3 2.91 2.3.09 0 .18 0 .27-.01l6.94-.64a3.23 3.23 0 0 0 2.8-2.28l1.83-6c.17-.58.07-1.18-.29-1.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingCartBold;
