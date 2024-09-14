import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubPokerCardOutline = ({
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
      d="M15.25 21.75h-6A4.756 4.756 0 0 1 4.5 17V7a4.756 4.756 0 0 1 4.75-4.75h6A4.756 4.756 0 0 1 20 7v10a4.756 4.756 0 0 1-4.75 4.75m-6-18A3.254 3.254 0 0 0 6 7v10a3.254 3.254 0 0 0 3.25 3.25h6A3.254 3.254 0 0 0 18.5 17V7a3.254 3.254 0 0 0-3.25-3.25z"
    />
    <Path
      fill={props.color}
      d="M16.25 6.76A.752.752 0 1 1 17 6v.01a.75.75 0 0 1-.75.75M8.25 18.76a.753.753 0 0 1-.537-1.28A.753.753 0 0 1 9 18v.01a.75.75 0 0 1-.75.75M12.226 16.628a.75.75 0 0 1-.75-.744v-1.013c-.342.1-.697.15-1.053.147a2.438 2.438 0 0 1-.61-4.795 2.4 2.4 0 0 1 .069-1.053 2.436 2.436 0 0 1 4.748 1.05q.14.037.274.088a2.442 2.442 0 0 1-1.007 4.715 3.3 3.3 0 0 1-.921-.144v.992a.75.75 0 0 1-.744.757zm.6-3.6a1.3 1.3 0 0 0 1.115.5.97.97 0 0 0 .913-.522.963.963 0 0 0-.5-1.3.96.96 0 0 0-.633-.02.75.75 0 0 1-.8-1.206.94.94 0 0 0-1.062-1.488.94.94 0 0 0-.544.601.97.97 0 0 0 .2.9.75.75 0 0 1-.765 1.206 1.04 1.04 0 0 0-.686.022.937.937 0 0 0 .356 1.8 1.4 1.4 0 0 0 1.171-.462.8.8 0 0 1 .127-.146.74.74 0 0 1 .489-.19h.025a.75.75 0 0 1 .527.234q.034.031.066.067z"
    />
  </Svg>
);
export default IconlystClubPokerCardOutline;
