import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeDashBold = ({
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
      d="M20.2 16.709q0-.045-.03-.09l-6.38-12.37c-.36-.69-1.05-1.13-1.79-1.13-.75 0-1.43.44-1.79 1.13l-6.38 12.37q-.03.045-.03.09c-.28.45-.43.93-.43 1.44 0 1.45 1.23 2.76 3.38 3.58a.753.753 0 0 0 .97-.43.76.76 0 0 0-.43-.97c-1.49-.57-2.42-1.4-2.42-2.18 0-1.4 2.93-2.97 7.13-2.97s7.13 1.57 7.13 2.97c0 .78-.93 1.61-2.42 2.18a.75.75 0 0 0-.43.97c.11.3.4.48.7.48.09 0 .18-.01.27-.05 2.15-.82 3.38-2.13 3.38-3.58 0-.51-.15-.99-.43-1.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.92 21c-1.178.165-2.646.166-3.998-.01a.752.752 0 0 0-.193 1.488c.745.096 1.508.145 2.271.145.757 0 1.473-.046 2.127-.137A.75.75 0 0 0 13.92 21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConeDashBold;
