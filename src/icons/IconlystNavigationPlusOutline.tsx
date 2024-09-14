import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationPlusOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M14.07 20.681a2.6 2.6 0 0 1-2.418-1.619L9.88 14.777a1.13 1.13 0 0 0-.615-.609l-4.13-1.672a2.62 2.62 0 0 1 .132-4.906l12.014-4.135a2.62 2.62 0 0 1 3.337 3.31.75.75 0 0 1-1.422-.478 1.118 1.118 0 0 0-1.426-1.414L5.756 9.008a1.12 1.12 0 0 0-.057 2.1l4.13 1.672a2.64 2.64 0 0 1 1.438 1.426l1.772 4.286a1.08 1.08 0 0 0 1.074.691 1.09 1.09 0 0 0 1.024-.764.75.75 0 0 1 .955-.49.75.75 0 0 1 .467.966 2.6 2.6 0 0 1-2.393 1.787z"
    />
    <Path
      fill={props.color}
      d="M17.75 15.615a.75.75 0 0 1-.75-.75V9.86a.75.75 0 1 1 1.5 0v5.006a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M20.25 13.11h-5.006a.75.75 0 0 1 0-1.5h5.006a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystNavigationPlusOutline;
