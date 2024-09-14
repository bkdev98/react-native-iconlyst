import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMxTokenBulk = ({
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
      d="m2.97 16.974-.01-.009.025.041zM22.03 16.974a2.51 2.51 0 0 0-.129-2.302l-4.586-7.9a2.5 2.5 0 0 0-2.162-1.273c-.889 0-1.727.434-2.202 1.202l-.45.72 5.529 8.827c.573.918 2.175 2.346 4 .726"
    />
    <Path
      fill={props.color}
      d="M9.847 5.499c.889 0 1.727.434 2.202 1.202l5.98 9.547c.575.92 2.182 2.351 4.011.717-.395.838-1.204 1.535-2.303 1.535H5.31c-.93 0-1.748-.474-2.212-1.272a2.52 2.52 0 0 1 0-2.556l4.586-7.9a2.5 2.5 0 0 1 2.162-1.273"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMxTokenBulk;
