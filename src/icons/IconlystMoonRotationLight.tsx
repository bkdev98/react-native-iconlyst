import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRotationLight = ({
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
    <Circle
      cx={12.114}
      cy={12.613}
      r={5.387}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.727 12.55c1.462-.476 1.11.749 2.033 1.119.992.427 2.425-.094 2.103-1.124a1.5 1.5 0 0 0-.217-.425c-.115-.159-.256-.3-.347-.474a2 2 0 0 1-.173-.47c-.113-.497.181-.958.487-1.367.191-.255.368-.527.379-.67.033-.43-.265-.94-.538-1.58M17.448 12.161c-1.23.4-1.87-.73-2.924-.96-1.396-.307-1.625 1.092-.693 2.025 1.592 1.978-1.595 2.906-.46 4.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.59 9.58a9 9 0 1 1-6.232-5.686"
    />
    <Circle
      cx={18.592}
      cy={5.581}
      r={1.645}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystMoonRotationLight;
