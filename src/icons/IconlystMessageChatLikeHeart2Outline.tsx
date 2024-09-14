import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart2Outline = ({
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
      d="M12.208 21.76a9.7 9.7 0 0 1-4.068-.888 3.3 3.3 0 0 0-.984-.3c-.361.04-.714.13-1.05.266-.764.263-1.81.623-2.568-.134s-.4-1.8-.138-2.56c.138-.34.227-.699.264-1.065a3.1 3.1 0 0 0-.3-.994 9.76 9.76 0 1 1 8.84 5.673zm-5.054-2.686a4.2 4.2 0 0 1 1.565.414l.034.015a8.253 8.253 0 1 0-4.01-4.01c.241.497.384 1.037.42 1.588a5 5 0 0 1-.343 1.55c-.094.275-.315.921-.221 1.014s.743-.129 1.019-.223a4.9 4.9 0 0 1 1.535-.348"
    />
    <Path
      fill={props.color}
      d="M12.23 15.783a.74.74 0 0 1-.358-.091c-.112-.061-2.748-1.515-3.41-3.574a2.88 2.88 0 0 1 1.722-3.723 2.76 2.76 0 0 1 2.049.147 2.78 2.78 0 0 1 2.036-.15 2.88 2.88 0 0 1 1.729 3.727c-.64 2.036-3.294 3.51-3.406 3.572a.75.75 0 0 1-.362.092m-2.34-4.124a5.8 5.8 0 0 0 2.338 2.5 5.8 5.8 0 0 0 2.339-2.495 1.4 1.4 0 0 0-.754-1.842 1.27 1.27 0 0 0-1.136.194.75.75 0 0 1-.9 0 1.26 1.26 0 0 0-1.138-.193 1.4 1.4 0 0 0-.752 1.837z"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart2Outline;
