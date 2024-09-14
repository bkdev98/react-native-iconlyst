import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasStationSquareOutline = ({
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
      d="M8.103 7.634c.433-.465 1.038-.71 1.715-.71h2.818c.677 0 1.284.245 1.717.71.427.46.63 1.073.63 1.72v7.871a.75.75 0 0 1-1.5 0V9.354c0-.337-.103-.563-.228-.698-.12-.128-.312-.231-.62-.231H9.819c-.305 0-.498.102-.618.231-.125.135-.229.361-.229.698v7.871a.75.75 0 0 1-1.5 0V9.354c0-.648.204-1.261.632-1.72"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.052 17.225a.75.75 0 0 1 .75-.75h6.85a.75.75 0 0 1 0 1.5h-6.85a.75.75 0 0 1-.75-.75M18.137 8.935a.75.75 0 0 1 0 1.06l-.662.663v3.355c0 .718-.58 1.299-1.298 1.299H14.37a.75.75 0 0 1 0-1.5h1.605v-3.465a.75.75 0 0 1 .22-.53l.881-.882a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.53 12.006a.75.75 0 0 1 .75-.75h5.931a.75.75 0 0 1 0 1.5h-5.93a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 8.514a5.75 5.75 0 0 1 5.75-5.75h8A5.75 5.75 0 0 1 22 8.514v8a5.75 5.75 0 0 1-5.75 5.75h-8a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25A4.25 4.25 0 0 0 4 8.514v8a4.25 4.25 0 0 0 4.25 4.25h8a4.25 4.25 0 0 0 4.25-4.25v-8a4.25 4.25 0 0 0-4.25-4.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasStationSquareOutline;
