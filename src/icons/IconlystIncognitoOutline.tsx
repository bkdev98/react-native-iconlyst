import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.54 14.928a2.253 2.253 0 1 0 0 4.506 2.253 2.253 0 0 0 0-4.506m-3.753 2.254a3.753 3.753 0 1 1 7.506-.002 3.753 3.753 0 0 1-7.506.002M16.962 14.928a2.254 2.254 0 1 0 .002 4.507 2.254 2.254 0 0 0-.002-4.507m-3.753 2.254a3.754 3.754 0 1 1 7.507-.001 3.754 3.754 0 0 1-7.507 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.704 17.85c-.917-.33-1.882-.34-2.925.006a.75.75 0 1 1-.472-1.423c1.338-.444 2.649-.446 3.905.006a.75.75 0 0 1-.508 1.411M21.132 11.72c-5.968-.956-11.887-.969-17.76-.001a.75.75 0 1 1-.244-1.48c6.038-.995 12.12-.98 18.24-.001a.75.75 0 1 1-.236 1.481"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.114 3.798 2.915 1.172a.8.8 0 0 0 .6 0l2.916-1.172a2.302 2.302 0 0 1 3.08 1.525l1.323 4.813a.75.75 0 1 1-1.446.398L17.178 5.72a.8.8 0 0 0-1.073-.531l-2.917 1.172c-.551.22-1.166.221-1.717 0L8.554 5.19a.802.802 0 0 0-1.074.531l-1.323 4.813a.75.75 0 0 1-1.446-.398l1.323-4.813a2.302 2.302 0 0 1 3.08-1.525"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIncognitoOutline;
