import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCheckBold = ({
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
      d="M20.356 12.77a5.6 5.6 0 0 0-2.46-.564 5.71 5.71 0 0 0-5.703 5.704c0 .871.2 1.696.552 2.435.1.21-.046.465-.279.465H7.105c-3.16 0-5.282-2.221-5.282-5.526V7.336c0-3.305 2.123-5.526 5.282-5.526h8.435c3.16 0 5.283 2.22 5.283 5.526v5.156c0 .234-.257.38-.467.278M7.743 7.38a.75.75 0 0 0-.75.75 4.334 4.334 0 0 0 4.329 4.33 4.334 4.334 0 0 0 4.33-4.33.75.75 0 0 0-1.5 0 2.833 2.833 0 0 1-2.83 2.83 2.83 2.83 0 0 1-2.83-2.83.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.616 17.91c0-2.36 1.92-4.28 4.28-4.28s4.281 1.92 4.281 4.28a4.286 4.286 0 0 1-4.28 4.28c-2.36 0-4.28-1.92-4.28-4.28m5.634-1.566a.75.75 0 1 1 1.06 1.061l-2.298 2.297a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1.237-1.236a.75.75 0 1 1 1.06-1.061l.707.707z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagCheckBold;
