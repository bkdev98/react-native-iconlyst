import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnlyfansTwoTone = ({
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
      d="M8.53 13.986a1.897 1.897 0 1 0 0-3.794 1.897 1.897 0 0 0 0 3.794"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.53 18.619c2.7 0 5.074-1.672 6.07-4.008 3.813 0 4.75-2.828 5.19-4.242-1.365.338-2.35.303-3.56-.068 1.002-.09 4.884-1.485 5.77-4.922h-5.198a5.405 5.405 0 0 0-5.155 3.78l-2.978 9.444"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.53 18.62a6.53 6.53 0 1 1 0-13.061c1.583 0 3.035.563 4.165 1.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOnlyfansTwoTone;
