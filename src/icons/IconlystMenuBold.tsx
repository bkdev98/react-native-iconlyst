import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuBold = ({
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
      d="M8.765 16.762c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26M8.765 10.74c-.695 0-1.261.565-1.261 1.261a1.262 1.262 0 0 0 2.522 0c0-.696-.566-1.26-1.261-1.26M8.765 4.719c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26M15.235 16.762c-.695 0-1.26.565-1.26 1.26a1.262 1.262 0 0 0 2.521 0c0-.695-.566-1.26-1.26-1.26M15.235 10.74c-.695 0-1.26.565-1.26 1.261a1.262 1.262 0 0 0 2.521 0c0-.696-.566-1.26-1.26-1.26M15.235 7.24c.695 0 1.261-.565 1.261-1.261a1.262 1.262 0 0 0-2.522 0c0 .696.566 1.26 1.261 1.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenuBold;
