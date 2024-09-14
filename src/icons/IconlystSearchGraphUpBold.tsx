import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphUpBold = ({
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
      d="M16.238 8.63c-.01-.039-.038-.069-.052-.106-.034-.084-.065-.169-.12-.24a1 1 0 0 0-.67-.386c-.094-.01-.187.005-.279.02-.035.005-.072-.003-.107.007l-2.176.591a1 1 0 0 0-.703 1.226.983.983 0 0 0 1.087.713l-.833 1.45-1.437-.823a1 1 0 0 0-1.363.37l-1.452 2.52a1 1 0 0 0 1.733.997l.954-1.655 1.438.824a1.004 1.004 0 0 0 1.364-.37l1.328-2.312a.99.99 0 0 0 1.168.58 1 1 0 0 0 .706-1.225z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.714 11.42C4.714 7.328 8.042 4 12.132 4s7.417 3.328 7.417 7.42-3.327 7.42-7.417 7.42-7.418-3.328-7.418-7.42m17.279 8.872-2.735-2.731a9.37 9.37 0 0 0 2.29-6.141c0-5.194-4.223-9.42-9.416-9.42s-9.418 4.226-9.418 9.42 4.225 9.42 9.418 9.42a9.36 9.36 0 0 0 5.664-1.912l2.784 2.78a1 1 0 0 0 1.414-.001 1 1 0 0 0-.001-1.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphUpBold;
