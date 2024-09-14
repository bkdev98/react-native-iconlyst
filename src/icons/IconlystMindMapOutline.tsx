import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMindMapOutline = ({
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
      d="M13.338 6.236a2.87 2.87 0 0 1 2.868-2.867h3.176a2.868 2.868 0 0 1 0 5.735h-3.176a2.87 2.87 0 0 1-2.868-2.868m2.868-1.367a1.368 1.368 0 0 0 0 2.735h3.176a1.368 1.368 0 0 0 0-2.735zM13.338 18.942a2.87 2.87 0 0 1 2.868-2.867h3.176a2.868 2.868 0 0 1 0 5.735h-3.176a2.87 2.87 0 0 1-2.868-2.868m2.868-1.367a1.368 1.368 0 0 0 0 2.735h3.176a1.368 1.368 0 0 0 0-2.735zM2.75 12.59a2.87 2.87 0 0 1 2.868-2.868h3.176a2.868 2.868 0 1 1 0 5.735H5.618a2.87 2.87 0 0 1-2.868-2.868m2.868-1.368a1.368 1.368 0 1 0 0 2.735h3.176a1.368 1.368 0 1 0 0-2.735z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.441 6.986a2.426 2.426 0 0 0-2.426 2.427v1.059a.75.75 0 0 1-1.5 0v-1.06a3.926 3.926 0 0 1 3.926-3.926h2.647a.75.75 0 0 1 0 1.5zM8.265 13.957a.75.75 0 0 1 .75.75v1.059a2.426 2.426 0 0 0 2.426 2.426h2.647a.75.75 0 0 1 0 1.5h-2.647a3.926 3.926 0 0 1-3.926-3.926v-1.059a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMindMapOutline;
