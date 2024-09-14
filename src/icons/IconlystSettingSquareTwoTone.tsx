import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingSquareTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Rect
      width={18}
      height={18}
      x={3.25}
      y={3.5}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.032 21.5v-4.845a4.54 4.54 0 0 0 2.751-4.17 4.52 4.52 0 0 0-2.764-4.17v3.194a.87.87 0 0 1-.383.718l-.903.605a.86.86 0 0 1-.96 0l-.908-.605a.86.86 0 0 1-.384-.719V8.314a4.53 4.53 0 0 0-2.764 4.17 4.53 4.53 0 0 0 2.758 4.171V21.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSettingSquareTwoTone;
