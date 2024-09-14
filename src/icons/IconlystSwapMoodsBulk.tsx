import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapMoodsBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.3 9.9q-.466-.001-.9.065a.3.3 0 0 0-.236.223 6.47 6.47 0 0 1-4.322 4.573.3.3 0 0 0-.213.257c-.018.19-.029.38-.029.581 0 3.2 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7-2.5-5.7-5.7-5.7" />
      <Path d="M8.7 2.7C5.5 2.7 3 5.2 3 8.4s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.5-5.7-5.7-5.7" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.296 18.498c-1.1 0-2.1-1-2.1-2.2 0-.5-.3-.8-.8-.8s-.8.4-.8.8c0 2.1 1.6 3.7 3.6 3.7.4 0 .9-.2.9-.7s-.4-.8-.8-.8M16.596 5.498c1.2 0 2.2 1 2.2 2.2 0 .5.4.8.8.8s.7-.4.7-.9c0-2.1-1.7-3.7-3.7-3.7-.5 0-.8.3-.8.8s.4.8.8.8M17.88 14.692c-.42 0-.75-.31-.75-.73v-.04a.749.749 0 1 1 1.5 0c0 .42-.34.77-.75.77M18.28 17.992a.72.72 0 0 1-.44.14c-.23 0-.46-.11-.61-.31-.37-.52-1.33-.52-1.69 0a.76.76 0 0 1-1.05.17.743.743 0 0 1-.18-1.04c.47-.66 1.24-1.04 2.07-1.04s1.61.38 2.07 1.04c.24.33.17.8-.17 1.04M14.19 13.922c0-.42.34-.75.75-.75.42 0 .75.33.75.75 0 .41-.33.77-.75.77-.41 0-.75-.31-.75-.72zM11.02 6.822a.749.749 0 1 1-1.5 0c0-.41.33-.78.75-.78.41 0 .75.31.75.72zM10.84 9.952c-.46.65-1.24 1.04-2.07 1.04s-1.6-.39-2.07-1.04a.753.753 0 0 1 .18-1.05c.34-.24.8-.16 1.05.17.36.52 1.32.52 1.69 0a.751.751 0 1 1 1.22.88M6.58 6.762a.749.749 0 1 1 1.5 0c0 .42-.33.78-.75.78-.41 0-.75-.31-.75-.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapMoodsBulk;
