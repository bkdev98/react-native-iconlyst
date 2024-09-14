import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnBackOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.722 3.47a.75.75 0 0 1 0 1.06L6.455 6.797l2.267 2.267a.75.75 0 0 1-1.06 1.06L4.863 7.327a.75.75 0 0 1 0-1.06L7.661 3.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.648 6.797a.75.75 0 0 1 .75-.75h7.22a6.736 6.736 0 1 1 0 13.473.75.75 0 0 1 0-1.5 5.236 5.236 0 0 0 0-10.473h-7.22a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.6 16.336a1.456 1.456 0 1 0 0 2.912 1.456 1.456 0 0 0 0-2.912m-2.955 1.456a2.956 2.956 0 1 1 5.912 0 2.956 2.956 0 0 1-5.912 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnBackOutline;
