import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnlyfansLight = ({
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
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.695 7.057A6.53 6.53 0 1 0 8.53 18.618c2.699 0 5.073-1.67 6.068-4.007 3.814 0 4.751-2.828 5.191-4.242-1.365.338-2.35.303-3.56-.068 1.003-.09 4.885-1.485 5.77-4.922h-5.198a5.405 5.405 0 0 0-5.155 3.78L8.67 18.603"
    />
  </Svg>
);
export default IconlystOnlyfansLight;
