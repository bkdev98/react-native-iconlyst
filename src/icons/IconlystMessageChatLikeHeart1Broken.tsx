import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart1Broken = ({
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
      d="M19.567 6.443C16.165 2.14 9.882 1.87 6.119 5.633 3.368 8.386 2.773 12.46 4.315 15.793c.128.318.625 1.199.959 1.776.19.329.17.735-.049 1.045-.22.308-.498.704-.715 1.03A.871.871 0 0 0 5.233 21h.542c2.373-.001 5.85-.003 6.677 0a8.98 8.98 0 0 0 6.92-3.21c2.005-2.367 2.58-5.61 1.7-8.474"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.479 15.323s2.495-1.37 3.053-3.145c.36-1.122-.063-2.403-1.24-2.781a2.03 2.03 0 0 0-1.813.305 2 2 0 0 0-1.817-.305c-1.177.378-1.596 1.66-1.237 2.78.174.542.52 1.043.92 1.479"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart1Broken;
