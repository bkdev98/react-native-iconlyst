import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTyphoonOutline = ({
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
      d="M12.644 8.966a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16m-4.58 3.08a4.58 4.58 0 1 1 9.16 0 4.58 4.58 0 0 1-9.16 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.034 2.767a.75.75 0 0 1-.48.946C9.328 4.77 6.78 9.699 10.305 14.058a.75.75 0 1 1-1.167.943c-4.225-5.226-1.213-11.35 2.95-12.714a.75.75 0 0 1 .947.48M15.017 8.888a.75.75 0 0 1 1.055.111c4.225 5.226 1.213 11.35-2.95 12.714a.75.75 0 0 1-.467-1.426c3.227-1.056 5.775-5.986 2.25-10.345a.75.75 0 0 1 .112-1.055"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.048 11.677c.708-6.683 7.169-8.883 11.077-6.903a.75.75 0 1 1-.678 1.338c-3.03-1.535-8.317.149-8.907 5.723a.75.75 0 0 1-1.492-.158M16.552 11.498a.75.75 0 0 1 .667.825c-.708 6.683-7.168 8.883-11.076 6.904a.75.75 0 0 1 .678-1.339c3.029 1.535 8.316-.149 8.906-5.723a.75.75 0 0 1 .825-.667"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.613 8.601c5.226-4.225 11.35-1.212 12.714 2.951a.75.75 0 0 1-1.426.467c-1.056-3.227-5.986-5.775-10.344-2.251A.75.75 0 0 1 9.613 8.6M3.381 11.638a.75.75 0 0 1 .946.479c1.057 3.227 5.986 5.775 10.345 2.251a.75.75 0 0 1 .943 1.167c-5.225 4.224-11.35 1.212-12.713-2.951a.75.75 0 0 1 .48-.947"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.113 8.137a.75.75 0 0 1 .824-.667c6.683.708 8.884 7.168 6.904 11.077a.75.75 0 1 1-1.338-.678c1.534-3.03-.15-8.317-5.723-8.907a.75.75 0 0 1-.667-.825M6.395 5.214a.75.75 0 0 1 .33 1.008c-1.534 3.03.15 8.317 5.724 8.907a.75.75 0 1 1-.158 1.492c-6.683-.708-8.884-7.168-6.904-11.076a.75.75 0 0 1 1.008-.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTyphoonOutline;
