import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse3Outline = ({
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
      fillRule="evenodd"
      d="M4.805 7.867a5.616 5.616 0 0 1 5.617-5.617h3.658a5.616 5.616 0 0 1 5.616 5.616v8.267a5.617 5.617 0 0 1-5.615 5.617h-3.66a5.616 5.616 0 0 1-5.615-5.616zm1.5 0v8.267a4.116 4.116 0 0 0 4.117 4.116h3.659a4.117 4.117 0 0 0 4.116-4.117l-.001-8.267A4.116 4.116 0 0 0 14.08 3.75h-3.658a4.116 4.116 0 0 0-4.117 4.117m5.945-.945a.75.75 0 0 1 .75.75v2.023a.75.75 0 0 1-1.5 0V7.672a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse3Outline;
