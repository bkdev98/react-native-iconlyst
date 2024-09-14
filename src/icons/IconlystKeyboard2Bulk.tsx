import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2Bulk = ({
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
      d="M16.229 3.25H7.771C4.47 3.25 2.5 5.184 2.5 8.422v7.163c-.005 1.563.464 2.863 1.357 3.758.917.921 2.268 1.407 3.905 1.407h8.467c3.3 0 5.271-1.93 5.271-5.163V8.498c0-3.286-1.971-5.248-5.271-5.248"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.117 8.592a.864.864 0 1 0 1.728-.002.864.864 0 0 0-1.728.002M14.455 11.982a.864.864 0 0 0 1.726 0 .864.864 0 0 0-1.726 0M9.328 16.893h5.345a.75.75 0 0 0 0-1.5H9.328a.75.75 0 0 0 0 1.5M8.671 11.12a.863.863 0 1 0 .003 1.727.863.863 0 0 0-.003-1.727M6.149 8.592a.864.864 0 1 0 1.728-.002.864.864 0 0 0-1.728.002M11.197 8.592a.864.864 0 1 0-1.728.002.864.864 0 0 0 1.728-.002M12.859 11.982a.864.864 0 1 0-1.727.003.864.864 0 0 0 1.727-.003M14.519 8.592a.864.864 0 1 0-1.728.002.864.864 0 0 0 1.728-.002"
    />
  </Svg>
);
export default IconlystKeyboard2Bulk;
