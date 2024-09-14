import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareLightsharp = ({
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
      strokeWidth={1.5}
      d="M3 2.75h18.5v18.5H3z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 8.662v7.424M15.998 11.678 12.25 7.914l-3.748 3.764"
    />
  </Svg>
);
export default IconlystArrowUpSquareLightsharp;
