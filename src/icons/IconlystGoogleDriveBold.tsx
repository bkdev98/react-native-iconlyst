import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveBold = ({
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
      d="M16.541 3.944a2.33 2.33 0 0 0-1.986-1.128l-3.428.002c-.812 0-1.573.432-1.986 1.13l-5.765 9.685a2.31 2.31 0 0 0 0 2.368l2.35 3.941a2.33 2.33 0 0 0 1.986 1.13h6.325c.216 0 .362-.222.29-.425a6.67 6.67 0 0 1 .147-4.81c.087-.206-.059-.444-.283-.444h-4.33a.516.516 0 0 1-.46-.749l2.98-5.868c.176-.346.742-.346.92 0l2.347 4.624c.093.183.34.22.492.082a6.66 6.66 0 0 1 4.496-1.743c.235 0 .393-.251.273-.453zM19.136 19.651a.75.75 0 0 0-.726.773l.002.061c.013.406.344.696.746.696h.027c.414-.013.738-.39.724-.804a.75.75 0 0 0-.773-.726"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.161 14.03a.75.75 0 0 0-.75.75v2.57a.75.75 0 0 0 1.5 0v-2.57a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleDriveBold;
