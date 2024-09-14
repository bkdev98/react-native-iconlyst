import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuBulk = ({
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
      d="M11.958 16.762c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26M11.958 10.74a1.262 1.262 0 0 0 0 2.522c.695 0 1.261-.566 1.261-1.26 0-.697-.566-1.262-1.261-1.262M11.958 4.719c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.996 16.762c-.695 0-1.26.565-1.26 1.26s.565 1.26 1.26 1.26c.694 0 1.26-.564 1.26-1.26 0-.695-.566-1.26-1.26-1.26M17.996 10.74a1.262 1.262 0 0 0 0 2.522c.694 0 1.26-.566 1.26-1.26 0-.697-.566-1.262-1.26-1.262M17.996 7.24c.694 0 1.26-.565 1.26-1.261 0-.695-.566-1.26-1.26-1.26s-1.26.565-1.26 1.26.565 1.26 1.26 1.26M6.005 16.762c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26M6.005 10.74a1.262 1.262 0 0 0 0 2.522c.695 0 1.26-.566 1.26-1.26 0-.697-.565-1.262-1.26-1.262M6.005 4.719c-.695 0-1.261.565-1.261 1.26a1.262 1.262 0 0 0 2.522 0c0-.695-.566-1.26-1.261-1.26" />
    </G>
  </Svg>
);
export default IconlystMenuBulk;
