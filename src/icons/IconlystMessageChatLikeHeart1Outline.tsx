import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart1Outline = ({
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
      d="M12.228 21.756h-7.25a1.621 1.621 0 0 1-1.346-2.525c.22-.33.5-.733.728-1.048a.22.22 0 0 0 .009-.234 20 20 0 0 1-1.005-1.87 9.756 9.756 0 1 1 8.864 5.677m-2.218-1.5h2.218a8.26 8.26 0 0 0 6.317-2.943 8.34 8.34 0 0 0 .178-10.4 8.258 8.258 0 0 0-12.33-.744 8.29 8.29 0 0 0-1.65 9.315c.08.195.354.722.928 1.716a1.72 1.72 0 0 1-.086 1.852c-.217.305-.49.693-.7 1.012a.12.12 0 0 0-.01.13.11.11 0 0 0 .108.062h5.032z"
    />
    <Path
      fill={props.color}
      d="M12.223 16.079a.75.75 0 0 1-.358-.091c-.112-.062-2.748-1.516-3.41-3.574a2.877 2.877 0 0 1 1.723-3.724 2.75 2.75 0 0 1 2.048.146 2.8 2.8 0 0 1 2.036-.148 2.88 2.88 0 0 1 1.729 3.727c-.64 2.036-3.294 3.51-3.406 3.572a.76.76 0 0 1-.362.092m-2.34-4.124a5.8 5.8 0 0 0 2.338 2.5 5.8 5.8 0 0 0 2.34-2.5 1.4 1.4 0 0 0-.755-1.842 1.28 1.28 0 0 0-1.136.194.75.75 0 0 1-.9 0 1.26 1.26 0 0 0-1.137-.191 1.393 1.393 0 0 0-.753 1.838z"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart1Outline;
