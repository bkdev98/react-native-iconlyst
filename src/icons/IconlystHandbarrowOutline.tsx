import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandbarrowOutline = ({
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
      d="M8.19 7.288h6.486a5.3 5.3 0 0 0-.505-.786c-.575-.738-1.442-1.414-2.738-1.414s-2.164.676-2.739 1.414c-.212.272-.379.547-.505.786m8.133 0a6.897 6.897 0 0 0-.969-1.708c-.753-.966-2.014-1.992-3.921-1.992S8.263 4.614 7.51 5.579a6.9 6.9 0 0 0-.969 1.709h-.098a1.6 1.6 0 0 0-1.486 2.198l1.828 4.553-.356.614a2.933 2.933 0 0 0-3.68 2.83 2.928 2.928 0 1 0 4.983-2.087l.162-.28h5.744l.009.033 1.18 4.22a1.428 1.428 0 0 0 2.804-.421l-.107-4.193a.8.8 0 0 0 .09-.225L19.329 6.9a.1.1 0 0 1 .099-.08H21.5a.75.75 0 0 0 0-1.5h-2.073c-.75 0-1.399.52-1.563 1.251l-.16.718zm1.044 1.5H6.444a.1.1 0 0 0-.094.139l1.883 4.69h8.05zm-1.333 6.328h-.838l.922 3.294zm-10.419.94-.51.88a.75.75 0 1 0 1.297.754l.524-.903a1.428 1.428 0 1 1-1.31-.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandbarrowOutline;
