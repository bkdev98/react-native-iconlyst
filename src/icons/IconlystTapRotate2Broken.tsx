import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotate2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.702 20.426c-1.642.276-3.44.087-4.783-.554-1.535-.733-3.144-1.88-4.107-2.614a1.77 1.77 0 0 1-.638-1.798 1.854 1.854 0 0 1 2.736-1.203l1.164.673a.61.61 0 0 0 .913-.527V5.037a1.588 1.588 0 0 1 3.176-.024l.063 4.108c2.223.213 5.44.098 6.339 2.524.905 2.441.015 5.671-1.57 7.256M6.991 6.037a2.512 2.512 0 1 1-2.149-.318"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.864 6.837V5.313H3.37"
    />
  </Svg>
);
export default IconlystTapRotate2Broken;
