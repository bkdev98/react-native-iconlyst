import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart2TwoTone = ({
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
      d="M8.685 20.165c3.331 1.542 7.406.947 10.156-1.803 3.511-3.512 3.517-9.21 0-12.728-3.512-3.51-9.216-3.51-12.728 0A9.01 9.01 0 0 0 4.31 15.79c.198.493.351.89.351 1.274 0 1.074-1.036 2.404-.345 3.095.69.69 2.021-.346 3.09-.353.383.001.786.16 1.279.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.423 11.866c-.359-1.121.06-2.402 1.237-2.78a2 2 0 0 1 1.816.305c.521-.387 1.195-.5 1.814-.306 1.177.379 1.599 1.66 1.24 2.78-.559 1.777-3.053 3.144-3.053 3.144S10 13.663 9.423 11.866"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart2TwoTone;
