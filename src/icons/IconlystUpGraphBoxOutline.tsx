import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphBoxOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.24 4.015c.985-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.062.591 4.045 1.648a5.4 5.4 0 0 1 1.238 2.248q.055.121.065.253c.122.514.184 1.06.184 1.628v7.947c0 1.627-.508 3.078-1.487 4.129-.984 1.056-2.386 1.647-4.046 1.647H8.283c-1.66 0-3.062-.59-4.046-1.647-.978-1.051-1.487-2.502-1.487-4.13V8.146c0-1.629.511-3.08 1.49-4.13m1.098 1.023c-.678.727-1.088 1.79-1.088 3.107v7.947c0 1.318.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.788 1.085-3.106V8.145c0-1.318-.409-2.381-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.833 6.042c.301.285.314.76.03 1.06l-6.86 7.25a.75.75 0 0 1-1.044.043l-3.648-3.252-6.069 6.933a.75.75 0 1 1-1.129-.989l6.568-7.501a.75.75 0 0 1 1.063-.066l3.67 3.271 6.359-6.72a.75.75 0 0 1 1.06-.029"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphBoxOutline;
