import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserScanBulk = ({
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
      <Path d="M21.466 14.815a.714.714 0 0 0-.714.715v1.58a3.18 3.18 0 0 1-3.178 3.175h-1.29a.715.715 0 0 0 0 1.43h1.29a4.61 4.61 0 0 0 4.606-4.605v-1.58a.714.714 0 0 0-.714-.715M8.617 20.285H7.36a3.18 3.18 0 0 1-3.18-3.175v-1.58a.715.715 0 0 0-1.428 0v1.58a4.61 4.61 0 0 0 4.608 4.605h1.257a.715.715 0 0 0 0-1.43M3.466 9.184c.395 0 .714-.32.714-.715V6.89a3.18 3.18 0 0 1 3.18-3.175h1.288a.714.714 0 1 0 0-1.429H7.36A4.61 4.61 0 0 0 2.752 6.89v1.58c0 .395.32.715.714.715M17.575 2.285h-1.257a.715.715 0 1 0 0 1.43h1.257a3.18 3.18 0 0 1 3.178 3.174V8.47a.715.715 0 0 0 1.429 0V6.89a4.61 4.61 0 0 0-4.607-4.605" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.466 12.211a3.026 3.026 0 0 0 3.024-3.02c0-1.67-1.357-3.03-3.024-3.03a3.03 3.03 0 0 0-3.024 3.03 3.026 3.026 0 0 0 3.024 3.02M8.016 17.051c0 .133.053.26.146.354a.5.5 0 0 0 .354.146l7.904-.01a.5.5 0 0 0 .5-.5c0-1.687-1.377-3.39-4.452-3.39s-4.452 1.708-4.452 3.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserScanBulk;
