import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet3Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.628 3.35H8.37c-2.76 0-4.616 1.936-4.616 4.819v9.36c0 2.883 1.855 4.82 4.616 4.82h7.258c2.76 0 4.615-1.937 4.615-4.82v-9.36c0-2.883-1.854-4.82-4.616-4.82"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.004 14.498a.75.75 0 0 1-1.5 0v-3.84a.75.75 0 0 1 1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.124 11.286-.656 4.82a3.516 3.516 0 0 1-3.469 3.033 3.515 3.515 0 0 1-3.466-3.034l-.656-4.819a4.15 4.15 0 0 1 .985-3.293 4.166 4.166 0 0 1 6.275 0 4.15 4.15 0 0 1 .986 3.293m-5.272-.838a1.151 1.151 0 0 1 2.3 0c0 .635-.516 1.151-1.15 1.151s-1.15-.516-1.15-1.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.488 14.498a.75.75 0 0 1-1.5 0v-3.84a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystToilet3Bulk;
