import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart4Bold = ({
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
      d="M14.055 9.647a1.26 1.26 0 0 0-1.133.189.745.745 0 0 1-.896-.004 1.23 1.23 0 0 0-1.126-.186 1.11 1.11 0 0 0-.676.565c-.183.356-.21.823-.072 1.251.334 1.04 1.575 2.008 2.323 2.487.755-.485 2.004-1.461 2.323-2.482.14-.432.112-.899-.07-1.254a1.1 1.1 0 0 0-.673-.566"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.228 11.922c-.636 2.03-3.278 3.497-3.39 3.558a.75.75 0 0 1-.72.002c-.11-.06-2.734-1.507-3.393-3.56-.262-.812-.201-1.687.167-2.398a2.63 2.63 0 0 1 1.55-1.307 2.74 2.74 0 0 1 2.039.142 2.75 2.75 0 0 1 2.03-.14 2.63 2.63 0 0 1 1.55 1.307c.367.711.429 1.584.167 2.396m4.864-1.609c-.4-4.037-3.596-7.3-7.603-7.758-2.392-.266-4.697.433-6.491 1.966C5.106 6.136 3.952 8.544 3.83 11.13c-.242 5.176 3.962 9.117 8.242 10.335a1.002 1.002 0 0 0 1.274-.98l-.001-1.479.02-.007c4.993-.609 8.17-4.18 7.727-8.685"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart4Bold;
