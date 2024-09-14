import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftUpLineOutline = ({
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
      d="M7.291 4.47a.75.75 0 0 1 .532-.22l6.904.014a.75.75 0 0 1-.003 1.5l-5.09-.01 7.077 7.077a.75.75 0 1 1-1.06 1.06L8.573 6.816l.009 5.09a.75.75 0 0 1-1.5.002L7.07 5.042a.75.75 0 0 1 .219-.571zM5.338 19a.75.75 0 0 1 .75-.75h11.826a.75.75 0 0 1 0 1.5H6.088a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftUpLineOutline;
