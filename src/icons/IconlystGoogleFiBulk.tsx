import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFiBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.682 2.498H6.32a2.865 2.865 0 0 0-2.863 2.86 2.865 2.865 0 0 0 2.863 2.86h11.36a2.863 2.863 0 0 0 2.861-2.86 2.863 2.863 0 0 0-2.86-2.86M13.228 12.802c0 1.57-1.28 2.86-2.86 2.86h-1.19v-2.86a2.86 2.86 0 0 0-2.86-2.86h4.05a2.86 2.86 0 0 1 2.86 2.86M9.178 15.662v2.98c0 1.57-1.28 2.86-2.86 2.86s-2.86-1.29-2.86-2.86v-5.84c0 1.57 1.28 2.86 2.86 2.86z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.68 2.498a2.865 2.865 0 0 0-2.863 2.86 2.865 2.865 0 0 0 2.863 2.86 2.863 2.863 0 0 0 2.86-2.86 2.863 2.863 0 0 0-2.86-2.86M17.68 9.938a2.865 2.865 0 0 0-2.863 2.86v5.84a2.865 2.865 0 0 0 2.863 2.86 2.864 2.864 0 0 0 2.86-2.86v-5.84a2.863 2.863 0 0 0-2.86-2.86M9.178 12.802v2.86h-2.86a2.86 2.86 0 1 1 2.86-2.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleFiBulk;
