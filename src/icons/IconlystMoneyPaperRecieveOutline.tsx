import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRecieveOutline = ({
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
      d="M4.655 6.472C4.255 6.902 4 7.544 4 8.37v7.388c0 .825.255 1.468.655 1.897.394.423.983.699 1.78.699h7.112a.75.75 0 0 1 0 1.5H6.434c-1.166 0-2.17-.417-2.877-1.177-.702-.753-1.057-1.784-1.057-2.919V8.37c0-1.135.355-2.165 1.057-2.919.707-.76 1.71-1.177 2.877-1.177H18.04c1.164 0 2.166.418 2.874 1.177.702.753 1.06 1.783 1.06 2.92v1.995a.75.75 0 1 1-1.5 0V8.369c0-.824-.257-1.467-.657-1.896-.395-.424-.985-.7-1.777-.7H6.434c-.796 0-1.385.276-1.78.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.709 8.52a.75.75 0 0 1 .75-.75H7.86a.75.75 0 0 1 0 1.5H6.459a.75.75 0 0 1-.75-.75M12.236 10.527a1.534 1.534 0 1 0 0 3.069 1.534 1.534 0 0 0 0-3.069M9.2 12.062a3.034 3.034 0 1 1 6.069 0 3.034 3.034 0 0 1-6.069 0M18.871 13.919a.75.75 0 0 1 0 1.06l-1.603 1.603 1.603 1.603a.75.75 0 1 1-1.06 1.06l-2.134-2.133a.75.75 0 0 1 0-1.06l2.134-2.133a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.457 16.582a.75.75 0 0 1 .75-.75h5.043a.75.75 0 1 1 0 1.5h-5.043a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperRecieveOutline;
