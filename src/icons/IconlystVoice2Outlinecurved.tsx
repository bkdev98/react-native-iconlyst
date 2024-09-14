import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Outlinecurved = ({
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
      d="M6.604 13.478a.75.75 0 0 1 .75.75 4.636 4.636 0 0 0 9.272 0 .75.75 0 1 1 1.5 0 6.136 6.136 0 0 1-12.272 0 .75.75 0 0 1 .75-.75M5.854 8.994a6.136 6.136 0 0 1 12.272 0v2.142a.75.75 0 1 1-1.5 0V8.994a4.635 4.635 0 1 0-9.272 0v2.142a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.99 18.864a.75.75 0 0 1 .75.75v2.045a.75.75 0 0 1-1.5 0v-2.045a.75.75 0 0 1 .75-.75M4.462 14.228a.75.75 0 0 1 .75-.75h13.556a.75.75 0 1 1 0 1.5H5.212a.75.75 0 0 1-.75-.75M9.747 10.848a.75.75 0 0 1 .75-.75h2.985a.75.75 0 1 1 0 1.5h-2.985a.75.75 0 0 1-.75-.75M10.738 8.078a.75.75 0 0 1 .75-.75h1.003a.75.75 0 0 1 0 1.5h-1.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoice2Outlinecurved;
