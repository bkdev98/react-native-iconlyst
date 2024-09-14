import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart1TwoTone = ({
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
      d="M12.452 21a8.98 8.98 0 0 0 6.92-3.21c2.722-3.215 2.807-8.043.195-11.347-3.402-4.302-9.685-4.573-13.448-.81-2.751 2.752-3.346 6.826-1.804 10.159.128.318.625 1.199.959 1.776.19.329.17.735-.049 1.045-.22.308-.498.704-.715 1.03A.871.871 0 0 0 5.233 21h.542c2.373-.001 5.85-.003 6.677 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.425 12.178c-.359-1.122.06-2.403 1.237-2.781a2 2 0 0 1 1.817.305 2.03 2.03 0 0 1 1.813-.305c1.177.378 1.6 1.66 1.24 2.78-.558 1.776-3.053 3.146-3.053 3.146s-2.476-1.348-3.054-3.145"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart1TwoTone;
