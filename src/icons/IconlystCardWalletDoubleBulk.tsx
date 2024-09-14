import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleBulk = ({
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
      d="M16.716 2.5H8.282C5.122 2.5 3 4.722 3 8.03v7.941C3 19.279 5.122 21.5 8.282 21.5h8.434c3.16 0 5.284-2.221 5.284-5.529V8.03c0-3.308-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.664 10.1H6.339a.75.75 0 0 1 0-1.5h1.029v-.1c0-1.725 1.164-2.93 2.829-2.93h4.606c1.665 0 2.828 1.205 2.828 2.93v.1h1.033a.75.75 0 0 1 0 1.5m-.005 6.34h-1.725l-.025.005a.1.1 0 0 1-.028.005.1.1 0 0 1-.029-.005l-.024-.006h-1.715a2.71 2.71 0 0 1-2.613 1.99 2.71 2.71 0 0 1-2.608-1.99H8.17l-.025.006a.1.1 0 0 1-.028.005.1.1 0 0 1-.029-.005l-.024-.006H6.342a.75.75 0 0 1 0-1.5H7.38c.067-1.647 1.2-2.789 2.816-2.789h4.606c1.614 0 2.747 1.142 2.815 2.79h1.04a.75.75 0 0 1 0 1.5m-3.856-2.79h-4.605c-.781 0-1.25.487-1.307 1.29h1.654a.75.75 0 0 1 .75.75c0 .708.53 1.24 1.206 1.24s1.204-.532 1.204-1.21c0-.414.337-.78.75-.78h1.654c-.058-.803-.526-1.29-1.306-1.29m0-6.58c.83 0 1.328.534 1.328 1.43v.1H8.868v-.1c0-.896.497-1.43 1.329-1.43z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardWalletDoubleBulk;
