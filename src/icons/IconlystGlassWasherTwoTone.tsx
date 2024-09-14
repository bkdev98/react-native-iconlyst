import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassWasherTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.19 9.331 2.573 7.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 14.838c-.974.12-2.934.385-3.843.802a.936.936 0 0 1-1.222-.441L3.352 7.972c-.23-.458-.06-1.03.396-1.263a18.6 18.6 0 0 1 8.501-2.028c2.92 0 5.84.663 8.503 2.028.456.234.625.805.397 1.263l-2.614 7.227a.935.935 0 0 1-1.222.441c-.684-.314-2.396-.541-3.122-.686"
      opacity={0.4}
    />
    <Circle
      cx={12.25}
      cy={18.069}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.879 8.747a1.8 1.8 0 0 0 1.2 1.2 1.8 1.8 0 0 0-1.2 1.2 1.8 1.8 0 0 0-1.2-1.2 1.8 1.8 0 0 0 1.2-1.2M12.783 7.882h.01"
    />
  </Svg>
);
export default IconlystGlassWasherTwoTone;
