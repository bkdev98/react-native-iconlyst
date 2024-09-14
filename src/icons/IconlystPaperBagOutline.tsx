import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBagOutline = ({
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
      d="M4.629 4.57c-.32 0-.629.278-.629.684v1.827c0 .406.309.684.629.684H19.87c.32 0 .63-.279.63-.684V5.254c0-.405-.31-.684-.63-.684zM2.5 5.254c0-1.177.925-2.184 2.129-2.184H19.87c1.203 0 2.13 1.006 2.13 2.184v1.827c0 1.178-.927 2.184-2.13 2.184H4.63C3.425 9.265 2.5 8.259 2.5 7.08zM8.861 12.91a.75.75 0 0 1 .75-.75h5.278a.75.75 0 1 1 0 1.5H9.61a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.527 7.766a.75.75 0 0 1 .75.75v7.352c0 1.11.344 1.994.902 2.594.553.594 1.372.97 2.452.97h7.237c1.08 0 1.9-.376 2.453-.97.558-.6.902-1.485.902-2.594V8.516a.75.75 0 0 1 1.5 0v7.352c0 1.42-.444 2.691-1.305 3.616-.866.93-2.1 1.448-3.55 1.448H8.631c-1.45 0-2.683-.517-3.55-1.448-.86-.925-1.304-2.197-1.304-3.616V8.516a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperBagOutline;
