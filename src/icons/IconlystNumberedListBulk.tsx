import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumberedListBulk = ({
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
      d="M9 16c0-1.654-1.346-3-3-3s-3 1.346-3 3a1 1 0 1 0 2 0 1 1 0 0 1 2 0c0 .096-.03.601-.618 1.136-.689.618-2.642 2.041-2.662 2.055A1 1 0 0 0 4.309 21H8a1 1 0 1 0 0-2h-.727c.172-.14.327-.27.45-.381C8.876 17.57 9 16.438 9 16M4.78 6.268 5 6.09V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1.628-.779l-1.848 1.49A1 1 0 0 0 4.78 6.268"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.334 7H20a1 1 0 1 0 0-2h-8.666a1 1 0 1 0 0 2M20 11h-8.666a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2M20 17h-8.666a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2" />
    </G>
  </Svg>
);
export default IconlystNumberedListBulk;
