import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKiwiOutline = ({
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
      d="M9.49 3a.75.75 0 0 1 .75-.75c3.001 0 5.824.622 7.914 2.185 2.126 1.59 3.393 4.077 3.393 7.565s-1.267 5.976-3.393 7.565c-2.09 1.563-4.913 2.185-7.915 2.185a.75.75 0 1 1 0-1.5c2.83 0 5.285-.592 7.017-1.886 1.695-1.268 2.791-3.28 2.791-6.364s-1.096-5.097-2.791-6.364c-1.732-1.294-4.188-1.886-7.017-1.886A.75.75 0 0 1 9.49 3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.787 6.087C4.667 7.574 3.953 9.662 3.953 12s.714 4.426 1.834 5.913c1.12 1.486 2.609 2.337 4.193 2.337s3.073-.85 4.192-2.337 1.834-3.575 1.834-5.913-.715-4.426-1.834-5.913C13.052 4.601 11.563 3.75 9.98 3.75s-3.073.85-4.192 2.337m-1.198-.902C5.922 3.415 7.82 2.25 9.979 2.25c2.16 0 4.058 1.164 5.391 2.935 1.333 1.77 2.136 4.183 2.136 6.815s-.803 5.045-2.136 6.815-3.231 2.935-5.39 2.935c-2.16 0-4.058-1.164-5.391-2.935-1.333-1.77-2.136-4.182-2.136-6.815s.803-5.044 2.136-6.815"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.54 7.612a.75.75 0 0 1 .75.75v.769a.75.75 0 0 1-1.5 0v-.769a.75.75 0 0 1 .75-.75M9.54 14.12a.75.75 0 0 1 .75.75v.768a.75.75 0 0 1-1.5 0v-.769a.75.75 0 0 1 .75-.75M13.486 12a.75.75 0 0 1-.75.75h-.627a.75.75 0 1 1 0-1.5h.627a.75.75 0 0 1 .75.75M7.784 12a.75.75 0 0 1-.75.75h-.587a.75.75 0 0 1 0-1.5h.587a.75.75 0 0 1 .75.75M12.53 8.756a.75.75 0 0 1 0 1.06l-.443.443a.75.75 0 0 1-1.06-1.06l.443-.443a.75.75 0 0 1 1.06 0M8.131 13.787a.75.75 0 0 1 0 1.06l-.415.416a.75.75 0 0 1-1.06-1.06l.415-.416a.75.75 0 0 1 1.06 0M6.656 8.756a.75.75 0 0 0 0 1.06l.443.443a.75.75 0 1 0 1.06-1.06l-.443-.443a.75.75 0 0 0-1.06 0M11.055 13.787a.75.75 0 0 0 0 1.06l.415.416a.75.75 0 0 0 1.06-1.06l-.415-.416a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKiwiOutline;
