import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSyringeLight = ({
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
      d="M10.922 6.207c1.125-1.125 2.622-1.215 3.745-.093l3.22 3.22c1.125 1.126 1.032 2.62-.093 3.745l-4.753 4.753a4.86 4.86 0 0 1-6.872-6.872z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.169 17.832 3 21M17.315 3l3.684 3.685M19.158 4.844l-2.88 2.88M12.176 14.813l1.942 1.942M13.566 11.523l2.893 2.893"
    />
  </Svg>
);
export default IconlystSyringeLight;
