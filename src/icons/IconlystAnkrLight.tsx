import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrLight = ({
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
      d="M21 12a9 9 0 0 1-9 9 9 9 0 1 1 9-9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.369 13.09v.71c0 .604-.345 1.156-.888 1.42l-2.79 1.358a1.58 1.58 0 0 1-1.382 0L8.52 15.22a1.58 1.58 0 0 1-.887-1.42v-.71M16.369 10.921v-.667c0-.595-.335-1.14-.866-1.409l-2.79-1.413a1.58 1.58 0 0 0-1.426 0L8.498 8.845c-.53.269-.865.813-.865 1.409v.667"
    />
    <Circle
      cx={11.999}
      cy={11.991}
      r={2.13}
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
      d="M12 14.129v2.605"
    />
  </Svg>
);
export default IconlystAnkrLight;
