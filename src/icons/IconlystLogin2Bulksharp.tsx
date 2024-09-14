import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogin2Bulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.37 2.389H8.94v19.5h12.43z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.795 11.389c-2.012-.001-3.844-1.833-3.844-3.846v-.75h-1.5v.75c0 1.477.675 2.857 1.719 3.846H3.13v1.5h11.04c-1.044.989-1.72 2.368-1.72 3.845v.75h1.5v-.75c0-2.012 1.834-3.845 3.846-3.845h.75v-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogin2Bulksharp;
