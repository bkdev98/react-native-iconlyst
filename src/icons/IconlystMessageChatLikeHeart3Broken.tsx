import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart3Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.477 14.214a3.94 3.94 0 0 1-3.939 3.94H16.47c-.572 0-1.121.226-1.526.63l-1.423 1.422a1.476 1.476 0 0 1-2.09 0l-1.42-1.421a2.16 2.16 0 0 0-1.527-.632H7.416a3.94 3.94 0 0 1-3.94-3.94V7.3a3.94 3.94 0 0 1 3.94-3.94h10.122a3.94 3.94 0 0 1 3.939 3.94v3.457"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 14.314s2.478-1.36 3.033-3.123c.356-1.114-.063-2.385-1.232-2.76a2 2 0 0 0-1.8.303 1.99 1.99 0 0 0-1.803-.304c-1.17.376-1.585 1.647-1.23 2.762.176.544.527 1.048.93 1.484"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart3Broken;
