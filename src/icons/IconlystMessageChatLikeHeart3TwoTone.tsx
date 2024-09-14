import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart3TwoTone = ({
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
      d="m11.432 20.206-1.422-1.421a2.16 2.16 0 0 0-1.526-.632H7.416a3.94 3.94 0 0 1-3.94-3.94V7.3a3.94 3.94 0 0 1 3.94-3.94h10.122a3.94 3.94 0 0 1 3.939 3.94v6.915a3.94 3.94 0 0 1-3.939 3.94H16.47c-.572 0-1.121.226-1.526.63l-1.423 1.422a1.476 1.476 0 0 1-2.09 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.446 11.192c-.356-1.115.06-2.386 1.229-2.762a1.99 1.99 0 0 1 1.802.304 2 2 0 0 1 1.801-.304c1.169.376 1.588 1.647 1.232 2.762-.555 1.762-3.033 3.122-3.033 3.122s-2.457-1.34-3.031-3.123"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart3TwoTone;
