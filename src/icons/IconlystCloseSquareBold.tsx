import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.34 2C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2Zm-1.33 6.97a.88.88 0 0 0-1.24 0L12 10.75l-1.78-1.78a.88.88 0 0 0-1.24 0 .88.88 0 0 0 0 1.24l1.78 1.78-1.78 1.77a.88.88 0 0 0 .62 1.5c.23 0 .45-.09.62-.26L12 13.23 13.78 15c.17.18.39.26.61.26.23 0 .45-.09.62-.26a.87.87 0 0 0 0-1.23l-1.78-1.78 1.78-1.78a.88.88 0 0 0 0-1.24"
    />
  </Svg>
);
export default IconlystCloseSquareBold;
