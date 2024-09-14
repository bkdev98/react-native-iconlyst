import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeDashOutline = ({
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
      d="M4.37 16.531a.75.75 0 0 1 .75.75c0 .567.515 1.308 1.879 1.952 1.305.616 3.161 1.017 5.252 1.017s3.946-.401 5.25-1.017c1.364-.644 1.878-1.385 1.878-1.952a.75.75 0 0 1 1.5 0c0 1.487-1.249 2.606-2.737 3.308-1.546.73-3.63 1.161-5.891 1.161s-4.346-.43-5.893-1.16C4.87 19.886 3.62 18.767 3.62 17.28a.75.75 0 0 1 .75-.75M12.25 14.312c-.72 0-1.417.047-2.073.136a.75.75 0 1 1-.201-1.487c.724-.097 1.487-.15 2.274-.15.73 0 1.44.046 2.117.13a.75.75 0 0 1-.186 1.489 16 16 0 0 0-1.93-.118"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.968 14.129a.75.75 0 0 1-.43.97c-.823.317-1.45.7-1.86 1.099-.406.395-.559.763-.559 1.083a.75.75 0 1 1-1.5 0c0-.842.412-1.574 1.013-2.158.598-.582 1.42-1.06 2.366-1.424a.75.75 0 0 1 .97.43M16.529 14.129a.75.75 0 0 1 .97-.43c.945.364 1.768.841 2.366 1.423.6.585 1.013 1.317 1.013 2.16a.75.75 0 1 1-1.5 0c0-.321-.153-.69-.56-1.085-.409-.398-1.036-.781-1.859-1.098a.75.75 0 0 1-.43-.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.462 3.373c.773-1.497 2.8-1.497 3.573 0l6.384 12.376a.75.75 0 0 1-1.333.687L12.702 4.061c-.12-.232-.302-.311-.454-.311-.151 0-.333.079-.453.31L5.411 16.437a.75.75 0 0 1-1.333-.687z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConeDashOutline;
