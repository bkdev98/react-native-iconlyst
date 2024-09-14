import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.02 13.256a.75.75 0 0 1 .928.513l.614 2.137a.75.75 0 0 1-1.441.415l-.408-1.416-1.416.407a.75.75 0 1 1-.414-1.441z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.601 13.326a.75.75 0 0 1 .28 1.023l-2.816 4.926a.75.75 0 0 1-.866.346l-4.38-1.31-1.951 3.146a.75.75 0 1 1-1.275-.79l2.254-3.635a.75.75 0 0 1 .852-.324l4.36 1.306 2.519-4.41a.75.75 0 0 1 1.023-.278M8.879 9.513a1.98 1.98 0 0 1 1.98-1.98h2.285a.75.75 0 0 1 0 1.5H10.86a.48.48 0 1 0 0 .96h1.406a1.98 1.98 0 0 1 0 3.962H9.98a.75.75 0 0 1 0-1.5h2.285a.48.48 0 0 0 0-.961H10.86a1.98 1.98 0 0 1-1.981-1.98"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.563 6.494a.75.75 0 0 1 .75.75v1.042a.75.75 0 0 1-1.5 0V7.244a.75.75 0 0 1 .75-.75m0 5.96a.75.75 0 0 1 .75.75v1.033a.75.75 0 0 1-1.5 0v-1.033a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.908 10.966a8.654 8.654 0 0 1 17.307 0 .75.75 0 0 1-1.5 0A7.154 7.154 0 1 0 7.562 16.9a.75.75 0 1 1-.84 1.242 8.65 8.65 0 0 1-3.814-7.175"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarUpOutline;
