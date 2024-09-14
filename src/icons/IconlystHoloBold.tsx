import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHoloBold = ({
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
      d="M14.256 11.25a.75.75 0 0 1 0 1.5h-.354a2.08 2.08 0 0 0 1.934 1.33.75.75 0 0 1 0 1.5 3.585 3.585 0 0 1-3.498-2.83h-.674a3.585 3.585 0 0 1-3.498 2.83.75.75 0 0 1 0-1.5 2.08 2.08 0 0 0 1.935-1.33h-.353a.75.75 0 0 1 0-1.5h.353a2.08 2.08 0 0 0-1.935-1.33.75.75 0 0 1 0-1.5 3.584 3.584 0 0 1 3.498 2.83h.674a3.584 3.584 0 0 1 3.498-2.83.75.75 0 0 1 0 1.5 2.08 2.08 0 0 0-1.934 1.33zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHoloBold;
