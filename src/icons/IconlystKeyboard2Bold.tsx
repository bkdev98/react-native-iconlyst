import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2Bold = ({
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
      d="M16.98 9.455a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m-1.662 3.39a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m-.645 4.048H9.328a.75.75 0 0 1 0-1.5h5.345a.75.75 0 0 1 0 1.5m-6.864-4.911a.863.863 0 1 1 1.727.003.863.863 0 0 1-1.727-.003m-.797-2.527a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m3.322-1.726a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m1.662 3.391a.864.864 0 1 1-.001 1.727.864.864 0 0 1 .001-1.727m1.66-3.391a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m2.573-4.479H7.771C4.47 3.25 2.5 5.184 2.5 8.422v7.163c-.005 1.563.464 2.863 1.357 3.758.917.921 2.268 1.407 3.905 1.407h8.467c3.3 0 5.271-1.93 5.271-5.163V8.498c0-3.286-1.971-5.248-5.271-5.248"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboard2Bold;
