import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadSearchOutline = ({
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
      d="M7.572 5.207a8.26 8.26 0 0 1 10.383.828Zm10.383.828-1.671.098a.75.75 0 0 0 .088 1.498l3.085-.182a.8.8 0 0 0 .236-.014l.067-.004a.75.75 0 0 0 .705-.793l-.2-3.407a.75.75 0 1 0-1.498.088l.088 1.504c-3.277-3.015-8.31-3.482-12.133-.852C2.29 7.02 1.167 13.092 4.215 17.524c3.055 4.44 9.123 5.555 13.554 2.506A9.74 9.74 0 0 0 22 12.007a.75.75 0 0 0-1.5-.002 8.24 8.24 0 0 1-3.581 6.79A8.244 8.244 0 0 1 5.45 16.674c-2.579-3.75-1.628-8.888 2.121-11.467m4.406 4.23a2.214 2.214 0 1 0 0 4.428 2.214 2.214 0 0 0 0-4.429m3.042 4.348a3.714 3.714 0 1 0-1.092 1.03l1.031 1.028a.75.75 0 0 0 1.06-1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadSearchOutline;
