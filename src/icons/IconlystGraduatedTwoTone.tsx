import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.723 14.369-6.842-3.345c-1.464-.715-1.464-2.8-.001-3.515l6.536-3.194a3.09 3.09 0 0 1 2.716 0l6.544 3.197c1.463.715 1.463 2.801 0 3.516l-6.54 3.197c-.861.42-1.866.42-2.726 0l-4.155-2.031M21.783 9.258l-.033 5.414"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.256 12.195v4.971a2.13 2.13 0 0 0 1.299 1.972c2.775 1.145 5.538 1.16 8.29.006a2.13 2.13 0 0 0 1.289-1.966v-4.892"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGraduatedTwoTone;
