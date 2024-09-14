import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerOutlinesharp = ({
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
      d="M11.744 3.995h1.018l9.635 16.912-.888 1.168H2.935l-.82-1.19zm.508 2.136L4.02 20.575H20.48z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.018 11.5v4.3h-1.5v-4.3zM11.511 17.088h1.51v1.5h-1.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDangerOutlinesharp;
