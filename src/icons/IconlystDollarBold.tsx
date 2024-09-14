import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBold = ({
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
      d="M13.334 15.733h-.332v-2.67h.332c.735 0 1.333.6 1.333 1.34 0 .732-.598 1.33-1.333 1.33m-2.667-4.67a1.334 1.334 0 0 1-1.334-1.33c0-.734.599-1.33 1.334-1.33h.335v2.66zm2.667 0h-.332v-2.66h1.999a1 1 0 1 0 0-2h-1.999v-1.34a1 1 0 1 0-2 0v1.34h-.335a3.336 3.336 0 0 0-3.334 3.33 3.336 3.336 0 0 0 3.334 3.33h.335v2.67H9a1 1 0 1 0 0 2h2.002v1.33a1 1 0 1 0 2 0v-1.33h.332a3.335 3.335 0 0 0 0-6.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarBold;
