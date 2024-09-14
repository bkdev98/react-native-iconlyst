import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSendOutline = ({
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
      fillRule="evenodd"
      d="M4.656 6.4C4.256 6.83 4 7.472 4 8.3V15.7c0 .827.256 1.47.656 1.9.395.424.985.7 1.783.7h7.123a.75.75 0 0 1 0 1.5H6.439c-1.168 0-2.172-.417-2.88-1.177-.703-.755-1.059-1.787-1.059-2.923V8.3c0-1.136.356-2.168 1.058-2.923.708-.76 1.712-1.178 2.88-1.178h11.624c1.165 0 2.169.418 2.877 1.178C21.642 6.131 22 7.163 22 8.3V10.3a.75.75 0 0 1-1.5 0V8.3c0-.826-.257-1.47-.658-1.9-.396-.425-.986-.7-1.78-.7H6.438c-.797 0-1.387.276-1.782.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.528 13.86a.75.75 0 0 1 1.06 0l2.138 2.137a.75.75 0 0 1 0 1.06l-2.137 2.136a.75.75 0 0 1-1.06-1.06l1.605-1.606-1.606-1.606a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.194 17.275h-5.05a.75.75 0 0 1 0-1.5h5.05a.75.75 0 1 1 0 1.5M5.713 8.451a.75.75 0 0 1 .75-.75h1.403a.75.75 0 0 1 0 1.5H6.463a.75.75 0 0 1-.75-.75M12.25 10.465a1.537 1.537 0 1 0 0 3.074 1.537 1.537 0 0 0 0-3.074m-3.037 1.537a3.037 3.037 0 1 1 6.075 0 3.037 3.037 0 0 1-6.075 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperSendOutline;
