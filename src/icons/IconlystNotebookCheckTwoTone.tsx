import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookCheckTwoTone = ({
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
      d="M21.185 17.164V6.834A3.81 3.81 0 0 0 17.528 3l-8.493.001a3.75 3.75 0 0 0-3.67 3.834v10.508A3.747 3.747 0 0 0 9.125 21l8.39-.001a3.754 3.754 0 0 0 3.67-3.835"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.654 15.936h6.859m-1.161-3.706h1.16M10.402 10.337l1.719 1.718 4.316-4.317M3.814 16.697H7.14m-3.326-4.699H7.14M3.814 7.301H7.14"
    />
  </Svg>
);
export default IconlystNotebookCheckTwoTone;
