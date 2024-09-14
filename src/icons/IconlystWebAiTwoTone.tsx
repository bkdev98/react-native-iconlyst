import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.783 3h8.434C19.165 3 21 5.082 21 8.027v7.946C21 18.92 19.165 21 16.216 21H7.783C4.835 21 3 18.919 3 15.973V8.027C3 5.082 4.844 3 7.783 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.345 6.55h-.056m2.541 0h-.055m2.541 0h-.055"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 9.492H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.334 17.443.094-.254a3.49 3.49 0 0 1 2.06-2.062l.252-.094-.253-.094a3.49 3.49 0 0 1-2.06-2.062l-.093-.254-.093.254a3.49 3.49 0 0 1-2.06 2.062l-.253.094.253.094a3.49 3.49 0 0 1 2.06 2.062zM8.803 17.841a1.77 1.77 0 0 1 1.176-1.178 1.77 1.77 0 0 1-1.176-1.179 1.77 1.77 0 0 1-1.177 1.179 1.77 1.77 0 0 1 1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebAiTwoTone;
