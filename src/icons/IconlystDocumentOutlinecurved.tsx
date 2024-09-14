import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentOutlinecurved = ({
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
      d="M7.626 15.696a.75.75 0 0 1 .75-.75h7.22a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1-.75-.75M7.626 11.937a.75.75 0 0 1 .75-.75h7.22a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1-.75-.75M7.626 8.177a.75.75 0 0 1 .75-.75h2.755a.75.75 0 0 1 0 1.5H8.376a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.89 4.27C6.422 2.58 8.798 2 12.001 2s5.58.581 7.111 2.27c1.512 1.667 2.03 4.232 2.03 7.73s-.518 6.064-2.03 7.73C17.58 21.42 15.204 22 12.001 22s-5.579-.58-7.11-2.27C3.377 18.064 2.86 15.498 2.86 12s.518-6.063 2.03-7.73m1.111 1.008C4.891 6.502 4.36 8.56 4.36 12s.53 5.499 1.641 6.723c1.09 1.201 2.91 1.777 6 1.777 3.091 0 4.91-.576 6-1.777 1.11-1.224 1.641-3.284 1.641-6.723s-.53-5.498-1.64-6.722C16.91 4.076 15.091 3.5 12 3.5c-3.09 0-4.91.576-6 1.778"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentOutlinecurved;
