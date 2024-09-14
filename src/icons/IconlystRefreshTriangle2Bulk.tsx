import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangle2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.63 15.554-.952-1.66a.999.999 0 1 0-1.735.995l.955 1.662a.75.75 0 0 1-.002.758.75.75 0 0 1-.661.386l-4.712.011v-.47a1 1 0 0 0-1.709-.706l-1.468 1.475a1 1 0 0 0 .004 1.415l1.467 1.46a1 1 0 0 0 1.088.214 1 1 0 0 0 .617-.923v-.465l4.716-.01a2.74 2.74 0 0 0 2.39-1.388 2.73 2.73 0 0 0 .003-2.754"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.394 5.7-.98 1.648a1 1 0 0 1-1.719-1.02l.979-1.648a2.73 2.73 0 0 1 2.373-1.352h.025c1 .01 1.891.533 2.384 1.401l2.328 4.1.403-.227a1 1 0 0 1 1.456 1.137l-.549 1.994a1.002 1.002 0 0 1-1.23.698l-2.007-.553a.998.998 0 0 1-.225-1.835l.411-.23-2.326-4.097a.78.78 0 0 0-.669-.388.75.75 0 0 0-.654.371M8 8.864a1 1 0 0 1 .839.735l.527 2.011a1 1 0 0 1-1.475 1.115l-.405-.238-2.378 4.066a.75.75 0 0 0-.004.767.74.74 0 0 0 .652.384l1.918.023a1 1 0 0 1-.012 2H7.65l-1.916-.023a2.73 2.73 0 0 1-2.372-1.397 2.74 2.74 0 0 1 .018-2.764l2.38-4.07-.4-.236a1 1 0 0 1 .255-1.83l2.002-.522a.8.8 0 0 1 .233-.017l.037.002q.024 0 .048-.004.031-.006.064-.002"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshTriangle2Bulk;
