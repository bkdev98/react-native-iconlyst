import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapMoodsBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.38 14.689c-.42 0-.75-.31-.75-.73v-.04a.749.749 0 1 1 1.5 0c0 .42-.34.77-.75.77m.4 3.3a.72.72 0 0 1-.44.14c-.23 0-.46-.11-.61-.31-.37-.52-1.33-.52-1.69 0a.76.76 0 0 1-1.05.17.743.743 0 0 1-.18-1.04c.47-.66 1.24-1.04 2.07-1.04s1.61.38 2.07 1.04c.24.33.17.8-.17 1.04m-4.09-4.07c0-.42.34-.75.75-.75.42 0 .75.33.75.75 0 .41-.33.77-.75.77-.41 0-.75-.31-.75-.72zm2.11-4.02c-.38 0-.74.03-1.09.1a6.47 6.47 0 0 1-4.56 4.82c-.03.26-.05.51-.05.78 0 3.2 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7-2.5-5.7-5.7-5.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.52 6.82a.749.749 0 1 1-1.5 0c0-.41.33-.78.75-.78.41 0 .75.31.75.72zm-.18 3.13c-.46.65-1.24 1.04-2.07 1.04s-1.6-.39-2.07-1.04a.753.753 0 0 1 .18-1.05c.34-.24.8-.16 1.05.17.36.52 1.32.52 1.69 0a.751.751 0 1 1 1.22.88M6.08 6.76a.749.749 0 1 1 1.5 0c0 .42-.33.78-.75.78-.41 0-.75-.31-.75-.72zM8.2 2.7C5 2.7 2.5 5.2 2.5 8.4s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.5-5.7-5.7-5.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapMoodsBold;
