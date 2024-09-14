import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineBulk = ({
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
      d="M18.21 2.372h-6.04c-2.28 0-3.82 1.56-3.91 3.89V6.5l.006.005v5.63c0 2.448 1.576 4.094 3.922 4.094h5.801l.003.003h.409c2.23-.09 3.73-1.7 3.73-4.08v-5.69c0-2.45-1.58-4.09-3.92-4.09m-5.26 5.269H6.91C4.63 7.64 3.09 9.2 3 11.53v.237l.005.005v5.63c0 2.449 1.576 4.095 3.922 4.095h5.801l.003.003h.409c2.23-.09 3.73-1.7 3.73-4.08v-5.69c0-2.45-1.58-4.09-3.92-4.09"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.87 16.23v-4.5c0-2.45-1.58-4.09-3.92-4.09H8.266v4.494c0 2.45 1.576 4.095 3.922 4.095z"
    />
  </Svg>
);
export default IconlystCombineBulk;
