import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart4Bulk = ({
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
      d="M21.092 10.313c-.4-4.037-3.596-7.3-7.603-7.758-2.392-.266-4.697.433-6.491 1.966C5.106 6.136 3.952 8.544 3.83 11.13c-.242 5.176 3.962 9.117 8.242 10.335a1.002 1.002 0 0 0 1.274-.98l-.001-1.479.02-.007c4.993-.609 8.17-4.18 7.727-8.685"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.237 9.74A2.44 2.44 0 0 0 14.7 8.304a2.56 2.56 0 0 0-1.21-.086c-.372.062-.709.284-.991.49-.273-.197-.618-.423-.991-.486a2.6 2.6 0 0 0-1.21.082c-1.551.502-2.03 2.2-1.595 3.55.675 2.167 3.584 3.545 3.708 3.603a.21.21 0 0 0 .176 0c.121-.057 2.988-1.41 3.704-3.6v-.002c.23-.713.21-1.465-.054-2.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart4Bulk;
