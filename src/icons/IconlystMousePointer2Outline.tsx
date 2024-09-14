import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointer2Outline = ({
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
      d="M10.6 18.75a1.79 1.79 0 0 1-1.675-1.14l-4.3-10.9A1.8 1.8 0 0 1 6.96 4.375l10.9 4.3a1.8 1.8 0 0 1-.019 3.356l-3.9 1.487a.3.3 0 0 0-.174.173l-1.486 3.9a1.79 1.79 0 0 1-1.67 1.158zm-4.3-13a.3.3 0 0 0-.207.09.29.29 0 0 0-.066.321l4.3 10.9a.33.33 0 0 0 .281.19.28.28 0 0 0 .278-.193l1.486-3.9a1.8 1.8 0 0 1 1.043-1.04l3.9-1.488a.3.3 0 0 0 0-.559l-10.9-4.3a.3.3 0 0 0-.118-.023z"
    />
    <Path
      fill={props.color}
      d="M19.25 19.75a.74.74 0 0 1-.53-.22l-5.882-5.882a.75.75 0 0 1 1.06-1.06l5.882 5.882a.75.75 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystMousePointer2Outline;
