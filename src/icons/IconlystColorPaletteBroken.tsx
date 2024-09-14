import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorPaletteBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.186 10.09V7a3.5 3.5 0 1 1 7 0v11a3.5 3.5 0 1 1-7 0v-4.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.686 18.043v.036m.15-.029a.15.15 0 1 1-.301 0 .15.15 0 0 1 .3 0M9.16 20.477l8.65-8.65a3.5 3.5 0 0 0 0-4.95M10.186 9.552l2.674-2.676a3.5 3.5 0 0 1 2.544-1.024"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.136 14.5h2.55a3.5 3.5 0 1 1 0 7h-1.094M13.383 21.5H6.686"
    />
  </Svg>
);
export default IconlystColorPaletteBroken;
