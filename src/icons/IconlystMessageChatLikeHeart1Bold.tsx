import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart1Bold = ({
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
      d="M14.059 10.117a1.27 1.27 0 0 0-1.146.19.75.75 0 0 1-.892-.005 1.25 1.25 0 0 0-1.137-.187 1.11 1.11 0 0 0-.68.566c-.186.36-.213.833-.074 1.27.337 1.041 1.586 2.015 2.339 2.496.758-.487 2.018-1.471 2.34-2.492.14-.438.113-.911-.073-1.27a1.11 1.11 0 0 0-.677-.568"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.238 12.41c-.63 1.996-3.124 3.413-3.406 3.568a.75.75 0 0 1-.72.001c-.113-.06-2.747-1.516-3.41-3.568-.262-.82-.2-1.703.17-2.42.328-.63.88-1.093 1.556-1.306a2.76 2.76 0 0 1 2.047.144 2.78 2.78 0 0 1 2.04-.142 2.63 2.63 0 0 1 1.552 1.308c.372.717.433 1.597.17 2.415m3.712-6.28a9.55 9.55 0 0 0-6.92-3.614 9.5 9.5 0 0 0-7.272 2.761c-2.81 2.808-3.575 7.117-1.916 10.7.11.272.443.892.99 1.842a.46.46 0 0 1-.023.502c-.222.313-.502.717-.723 1.043a1.373 1.373 0 0 0 1.139 2.137h7.254a9.5 9.5 0 0 0 7.267-3.387c2.9-3.42 2.985-8.46.204-11.984"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart1Bold;
