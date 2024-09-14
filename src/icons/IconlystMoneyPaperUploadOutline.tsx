import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUploadOutline = ({
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
      d="M5.145 10.87c-.367.395-.605.988-.605 1.756v5.224c0 .767.238 1.36.605 1.755.362.389.905.644 1.644.644h10.924c.739 0 1.28-.255 1.642-.644.367-.394.605-.988.605-1.755v-5.224c0-.767-.238-1.36-.606-1.755-.363-.39-.906-.644-1.64-.644H6.787c-.739 0-1.282.255-1.643.643M4.047 9.848c.675-.725 1.632-1.121 2.74-1.121h10.926c1.107 0 2.062.396 2.738 1.12.67.72 1.009 1.7 1.009 2.779v5.224c0 1.077-.337 2.058-1.007 2.777-.675.726-1.63 1.122-2.74 1.122H6.79c-1.11 0-2.066-.396-2.742-1.121-.67-.72-1.007-1.7-1.007-2.778v-5.224c0-1.078.338-2.059 1.007-2.778"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.063 12.07a.75.75 0 0 1 .75-.75H8.13a.75.75 0 0 1 0 1.5H6.812a.75.75 0 0 1-.75-.75M15.621 18.406a.75.75 0 0 1 .75-.75h1.319a.75.75 0 0 1 0 1.5H16.37a.75.75 0 0 1-.75-.75M12.252 13.84a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8m-2.9 1.4a2.9 2.9 0 1 1 5.8 0 2.9 2.9 0 0 1-5.8 0M11.58 2.47a.75.75 0 0 1 1.06 0l2.008 2.008a.75.75 0 1 1-1.06 1.06L12.11 4.062l-1.478 1.478a.75.75 0 0 1-1.06-1.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.11 2.25a.75.75 0 0 1 .75.75v4.155a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperUploadOutline;
