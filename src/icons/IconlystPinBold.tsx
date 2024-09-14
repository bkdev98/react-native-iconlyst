import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinBold = ({
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
      d="M18.768 13.374a7.3 7.3 0 0 0-2.799-3.473c-.117-.077-.23-.223-.2-.402l.63-3.873a2.8 2.8 0 0 0-.632-2.265 2.8 2.8 0 0 0-2.134-.987h-3.266c-.823 0-1.6.36-2.134.987a2.8 2.8 0 0 0-.63 2.264l.63 3.874c.03.178-.085.325-.2.401a7.3 7.3 0 0 0-2.8 3.474 2.2 2.2 0 0 0 .255 2.06 2.36 2.36 0 0 0 1.942 1.024h3.82v4.418a.75.75 0 1 0 1.5 0v-4.418h3.82c.775 0 1.5-.382 1.942-1.024.426-.62.52-1.371.256-2.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinBold;
