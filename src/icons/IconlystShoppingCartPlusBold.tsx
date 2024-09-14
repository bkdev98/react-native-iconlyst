import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartPlusBold = ({
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
      d="M15 11.69h-.82v.82a.749.749 0 1 1-1.5 0v-.82h-.82c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.82v-.82a.749.749 0 1 1 1.5 0v.82H15a.749.749 0 1 1 0 1.5m6.38-5.43c-.36-.48-.9-.72-1.51-.75l-13.52.11-.62-2.64A.76.76 0 0 0 5 2.4H3a.749.749 0 1 0 0 1.5h1.4l2.52 10.65c.32 1.36 1.54 2.3 2.91 2.3.09 0 .18 0 .27-.01l6.94-.64a3.23 3.23 0 0 0 2.8-2.28l1.83-6c.17-.58.07-1.18-.29-1.66M8.881 19.138c-.679 0-1.232.552-1.232 1.231a1.233 1.233 0 0 0 2.464 0c0-.679-.553-1.23-1.232-1.23M18.092 19.138c-.679 0-1.232.552-1.232 1.231a1.232 1.232 0 1 0 1.232-1.231"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingCartPlusBold;
