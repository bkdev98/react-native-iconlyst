import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentInfinityOutline = ({
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
      d="M8.112 21.34a4.78 4.78 0 0 1-4.776-4.775V7.026A4.78 4.78 0 0 1 8.112 2.25h6.935a4.78 4.78 0 0 1 4.775 4.776v6.152a.75.75 0 0 1-1.5 0V7.026a3.28 3.28 0 0 0-3.275-3.276H8.112a3.28 3.28 0 0 0-3.276 3.276v9.539a3.28 3.28 0 0 0 3.276 3.275.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M11.687 13.626H9.094a.75.75 0 1 1 0-1.5h2.593a.75.75 0 0 1 0 1.5M14.06 9.29H9.094a.75.75 0 1 1 0-1.5h4.967a.75.75 0 1 1 0 1.5M18.53 21.745a2.63 2.63 0 0 1-1.862-.77l-.8-.8-.8.8a2.635 2.635 0 1 1 0-3.727l.8.8.8-.8a2.635 2.635 0 1 1 1.862 4.5zm-1.607-2.633.8.8a1.136 1.136 0 1 0 0-1.605zm-3.725-1.134a1.135 1.135 0 1 0 .8 1.937l.8-.8-.8-.8a1.13 1.13 0 0 0-.797-.338z"
    />
  </Svg>
);
export default IconlystDocumentInfinityOutline;
