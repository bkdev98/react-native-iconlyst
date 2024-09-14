import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatSquareVerticalLight = ({
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
      d="m20.33 11.882-3.014 3.015-3.016-3.015M9.7 11.984 6.685 8.968l-3.016 3.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.691 6.055A3.055 3.055 0 0 1 9.747 3h4.513a3.056 3.056 0 0 1 3.055 3.055v8.781M17.315 17.944A3.056 3.056 0 0 1 14.26 21H9.747a3.056 3.056 0 0 1-3.056-3.056V9.06"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatSquareVerticalLight;
