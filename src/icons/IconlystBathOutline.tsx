import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBathOutline = ({
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
      fillRule="evenodd"
      d="M4.55 13.099a.55.55 0 0 0-.55.55v.783a3.69 3.69 0 0 0 3.69 3.688h9.121a3.69 3.69 0 0 0 3.689-3.688v-.783a.55.55 0 0 0-.55-.55zm-2.05.55a2.05 2.05 0 0 1 2.05-2.05h15.4a2.05 2.05 0 0 1 2.05 2.05v.783a5.19 5.19 0 0 1-5.189 5.188H7.69a5.19 5.19 0 0 1-5.19-5.188z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.76 2.562a2.77 2.77 0 0 1 3.185 2.74v7.046a.75.75 0 1 1-1.5 0V5.303a1.27 1.27 0 0 0-1.46-1.257l-1.875.282a1.27 1.27 0 0 0-1.08 1.257V6.59a.75.75 0 0 1-1.5 0V5.585a2.77 2.77 0 0 1 2.357-2.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.077 8.078h2.393c-.169-.393-.579-.714-1.123-.737m-1.27.737c.17-.417.635-.764 1.27-.737zm-1.571.351c0-1.54 1.386-2.652 2.905-2.587 1.454.062 2.644 1.212 2.644 2.639 0 .672-.576 1.097-1.132 1.097h-3.285c-.556 0-1.132-.425-1.132-1.097zM8.135 18.267a.75.75 0 0 1 .157 1.05l-1.369 1.848a.75.75 0 1 1-1.205-.892l1.368-1.85a.75.75 0 0 1 1.05-.156M16.503 18.267a.75.75 0 0 1 1.049.157l1.369 1.849a.75.75 0 1 1-1.206.892l-1.369-1.848a.75.75 0 0 1 .157-1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBathOutline;
