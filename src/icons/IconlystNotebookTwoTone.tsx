import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.185 6.835v10.328A3.754 3.754 0 0 1 17.515 21L9.125 21a3.747 3.747 0 0 1-3.76-3.657V6.835a3.75 3.75 0 0 1 3.67-3.834L17.528 3a3.81 3.81 0 0 1 3.657 3.835"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.814 16.697H7.14m-3.326-4.699H7.14M3.814 7.301H7.14"
    />
  </Svg>
);
export default IconlystNotebookTwoTone;
