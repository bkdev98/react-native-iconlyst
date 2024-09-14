import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard1Bold = ({
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
      d="M16.451 9.455a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m0 3.39a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m-2.003 4.047H9.551a.75.75 0 0 1 0-1.5h4.897a.75.75 0 0 1 0 1.5M7.549 9.455a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m0 3.39a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m4.447-1.726a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m0-3.39a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m4.233-4.479H7.771c-3.3 0-5.271 1.934-5.271 5.172v7.163c-.005 1.563.465 2.863 1.357 3.758.917.921 2.268 1.407 3.905 1.407h8.467c3.301 0 5.271-1.93 5.271-5.163V8.498c0-3.286-1.97-5.248-5.271-5.248"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboard1Bold;
