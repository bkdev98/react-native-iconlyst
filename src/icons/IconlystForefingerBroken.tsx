import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.534 20.825c-1.793.353-3.8.17-5.282-.538-1.616-.771-3.309-1.98-4.323-2.752a1.86 1.86 0 0 1-.67-1.892 1.95 1.95 0 0 1 2.88-1.266l1.224.708a.641.641 0 0 0 .961-.555V4.672a1.671 1.671 0 0 1 3.343-.026l.066 4.325c2.34.223 5.727.102 6.673 2.656.952 2.569.016 5.97-1.653 7.638"
    />
  </Svg>
);
export default IconlystForefingerBroken;
