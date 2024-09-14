import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart4Outline = ({
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
      d="M12.09 21.752q-.171 0-.335-.046C7.379 20.464 3.082 16.43 3.329 11.12a9.5 9.5 0 0 1 3.26-6.792 8.67 8.67 0 0 1 6.679-2.016 8.92 8.92 0 0 1 7.822 7.978c.505 5.11-3.482 8.331-7.743 8.928v1.266a1.28 1.28 0 0 1-.5 1.012 1.24 1.24 0 0 1-.758.257m.152-18a7.16 7.16 0 0 0-4.68 1.715 8.01 8.01 0 0 0-2.734 5.721c-.2 4.356 3.408 7.82 7.019 8.978V19a1.26 1.26 0 0 1 1.117-1.248c3.5-.42 7.07-2.889 6.634-7.316a7.42 7.42 0 0 0-6.5-6.636 8 8 0 0 0-.856-.047"
    />
    <Path
      fill={props.color}
      d="M12.24 15.284a.74.74 0 0 1-.358-.091c-.112-.061-2.748-1.515-3.41-3.574a2.88 2.88 0 0 1 1.722-3.723 2.76 2.76 0 0 1 2.05.147 2.78 2.78 0 0 1 2.035-.15 2.88 2.88 0 0 1 1.73 3.727c-.64 2.036-3.295 3.51-3.407 3.572a.75.75 0 0 1-.362.092M9.9 11.16a5.8 5.8 0 0 0 2.338 2.5 5.8 5.8 0 0 0 2.34-2.495 1.4 1.4 0 0 0-.755-1.842 1.27 1.27 0 0 0-1.136.194.75.75 0 0 1-.9 0 1.25 1.25 0 0 0-1.138-.193 1.4 1.4 0 0 0-.752 1.837z"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart4Outline;
