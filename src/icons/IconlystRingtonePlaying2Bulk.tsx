import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlaying2Bulk = ({
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
      d="M8.727 17.215q.001-.008.001-.016l4.647 1.235q-.004.007-.007.015l1.482.377 1.606.426c.946.252 1.94.005 2.66-.659a2.83 2.83 0 0 0 .868-2.597l-.2-1.1a4.9 4.9 0 0 1 .084-2.138l.345-1.302c1.022-3.847-1.276-7.81-5.124-8.832S7.28 3.9 6.257 7.747L5.91 9.05a4.9 4.9 0 0 1-.987 1.897l-.72.856a2.83 2.83 0 0 0-.537 2.686 2.83 2.83 0 0 0 1.982 1.892l1.605.427q-.004.008-.007.015z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.847 17.472-1.413-.392-.004.008-.003.007a3.776 3.776 0 0 0 2.675 4.614c2.01.534 4.081-.682 4.616-2.692l-1.415-.377-.003.008-.004.007a2.305 2.305 0 0 1-2.816 1.633 2.305 2.305 0 0 1-1.633-2.816"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtonePlaying2Bulk;
