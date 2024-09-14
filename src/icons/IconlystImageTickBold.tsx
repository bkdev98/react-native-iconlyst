import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTickBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.804 15.683c-.416.226-.803.452-1.14.655a.297.297 0 0 0-.043.477l3.368 3.021c.13.117.335.098.431-.049.516-.789.83-1.756.895-2.865a.28.28 0 0 0-.096-.228c-.43-.367-2.129-1.702-3.415-1.01M10.72 4.072q0-.353.04-.696a.31.31 0 0 0-.304-.345H7.633c-3.163 0-5.288 2.218-5.288 5.521v6.065a.3.3 0 0 0 .476.243l3.192-2.318a4.915 4.915 0 0 1 6.166.287l2.814 2.525c.1.09.25.103.363.03a30 30 0 0 1 1.736-1.02c1.521-.819 2.789-.452 3.754.148.21.13.498-.013.498-.261v-3.332c0-.227-.243-.373-.45-.28A7.206 7.206 0 0 1 10.72 4.073"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.895 13.756a635 635 0 0 1-4.375 3.117.29.29 0 0 0-.123.264c.261 2.94 2.286 4.884 5.235 4.884h8.435c1.055 0 1.993-.251 2.776-.706a.283.283 0 0 0 .038-.457l-7.698-6.908a3.42 3.42 0 0 0-4.288-.194M21.436 2.8a.75.75 0 0 0-1.061 0l-3.542 3.542-1.505-1.506a.75.75 0 0 0-1.061 1.06l2.036 2.036a.746.746 0 0 0 1.06 0l4.073-4.071a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageTickBold;
