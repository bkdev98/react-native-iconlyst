import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.897 8.374a1.306 1.306 0 1 0 0 2.61 1.306 1.306 0 0 0 0-2.61M6.092 9.679a2.806 2.806 0 0 1 2.805-2.805h.001a2.81 2.81 0 0 1 2.805 2.804v.001a2.805 2.805 0 1 1-5.611 0M14.461 12.007h.94l6.914 9.753-1.224.867-6.148-8.672-4.009 5.833h-.886l-2.5-2.243-4.014 5.338-1.199-.902 4.686-6.23h.775l2.531 2.272z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 23.104v-20h20v20zm1.5-1.5h17v-17h-17z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImage2Outlinesharp;
