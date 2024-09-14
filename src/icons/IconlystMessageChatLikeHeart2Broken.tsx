import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart2Broken = ({
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
      d="M18.84 18.362c-2.749 2.75-6.824 3.345-10.155 1.803-.493-.198-.896-.358-1.28-.359-1.068.007-2.398 1.043-3.089.353-.69-.691.345-2.021.345-3.095 0-.385-.153-.78-.35-1.274A9.01 9.01 0 0 1 6.112 5.634c3.512-3.51 9.216-3.51 12.728 0a9 9 0 0 1 1.672 10.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 15.01s2.494-1.368 3.053-3.144c.359-1.121-.063-2.402-1.24-2.78a2.03 2.03 0 0 0-1.813.305 2 2 0 0 0-1.817-.306c-1.176.379-1.596 1.66-1.237 2.78.2.624.63 1.194 1.105 1.671"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart2Broken;
