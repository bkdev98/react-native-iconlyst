import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Outlinesharp = ({
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
      d="M11.5 3.25v17.5H13V3.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 4c0 3.528-3.103 6.41-6.41 6.41h-.75v-1.5h.75C9.1 8.91 11.5 6.668 11.5 4v-.75H13z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.5 4c0 3.528 3.102 6.41 6.41 6.41h.75v-1.5h-.75C15.398 8.91 13 6.668 13 4v-.75h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp3Outlinesharp;
