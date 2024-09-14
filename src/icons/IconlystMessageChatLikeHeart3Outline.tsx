import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart3Outline = ({
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
      d="M12.227 21.39a2.2 2.2 0 0 1-1.575-.653l-1.423-1.422a1.4 1.4 0 0 0-.995-.412H7.166a4.7 4.7 0 0 1-4.69-4.69V7.298a4.694 4.694 0 0 1 4.69-4.689h10.122a4.694 4.694 0 0 1 4.689 4.69v6.914a4.7 4.7 0 0 1-4.69 4.69H16.22a1.4 1.4 0 0 0-1 .412l-1.422 1.422a2.2 2.2 0 0 1-1.574.653zM7.166 4.11a3.193 3.193 0 0 0-3.19 3.188v6.915a3.193 3.193 0 0 0 3.19 3.19h1.068a2.9 2.9 0 0 1 2.057.851l1.42 1.422a.743.743 0 0 0 1.029 0l1.423-1.422a2.88 2.88 0 0 1 2.056-.85h1.068a3.193 3.193 0 0 0 3.189-3.19V7.297a3.193 3.193 0 0 0-3.19-3.189z"
    />
    <Path
      fill={props.color}
      d="M12.226 15.062a.74.74 0 0 1-.358-.09c-.112-.062-2.748-1.516-3.41-3.575a2.88 2.88 0 0 1 1.722-3.723 2.76 2.76 0 0 1 2.049.147 2.78 2.78 0 0 1 2.036-.149 2.88 2.88 0 0 1 1.729 3.726c-.64 2.036-3.294 3.511-3.406 3.572a.75.75 0 0 1-.362.092m-2.34-4.124a5.8 5.8 0 0 0 2.338 2.5 5.8 5.8 0 0 0 2.339-2.495 1.4 1.4 0 0 0-.754-1.842 1.27 1.27 0 0 0-1.136.194.75.75 0 0 1-.9 0 1.25 1.25 0 0 0-1.138-.193 1.4 1.4 0 0 0-.752 1.837z"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart3Outline;
