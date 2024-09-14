import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDnaOutline = ({
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
      d="M6.137 20.102a.75.75 0 0 1 .75-.75h4.622a.75.75 0 1 1 0 1.5H6.887a.75.75 0 0 1-.75-.75M14.572 20.102a.75.75 0 0 1 .75-.75h2.289a.75.75 0 1 1 0 1.5h-2.289a.75.75 0 0 1-.75-.75M10.475 16.5a.75.75 0 0 1 .75-.75h5.22a.75.75 0 1 1 0 1.5h-5.22a.75.75 0 0 1-.75-.75M6.139 3.898a.75.75 0 0 1 .75-.75h2.288a.75.75 0 1 1 0 1.5H6.89a.75.75 0 0 1-.75-.75M12.24 3.898a.75.75 0 0 1 .75-.75h4.622a.75.75 0 0 1 0 1.5H12.99a.75.75 0 0 1-.75-.75M7.244 7.5a.75.75 0 0 1 .75-.75h5.198a.75.75 0 0 1 0 1.5H7.993a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.85 2.25A.75.75 0 0 1 7.6 3c0 4.114 2.413 6.16 5.13 8.424l.056.047C15.455 13.694 18.4 16.148 18.4 21a.75.75 0 0 1-1.5 0c0-4.114-2.413-6.16-5.13-8.424l-.057-.047C9.045 10.306 6.1 7.852 6.1 3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.65 2.25a.75.75 0 0 1 .75.75c0 4.852-2.945 7.306-5.614 9.529l-.056.047C10.013 14.84 7.6 16.886 7.6 21a.75.75 0 0 1-1.5 0c0-4.852 2.945-7.306 5.613-9.529l.057-.047C14.487 9.16 16.9 7.114 16.9 3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDnaOutline;
