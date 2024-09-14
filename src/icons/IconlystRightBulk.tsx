import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightBulk = ({
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
      d="M16.572 12a1.14 1.14 0 0 0-.335-.808L9.38 4.335a1.142 1.142 0 1 0-1.616 1.616L13.813 12z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.813 12-6.05 6.049a1.142 1.142 0 1 0 1.617 1.616l6.857-6.857a1.14 1.14 0 0 0 .335-.808z"
    />
  </Svg>
);
export default IconlystRightBulk;
