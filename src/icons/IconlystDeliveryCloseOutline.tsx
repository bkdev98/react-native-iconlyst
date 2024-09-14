import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloseOutline = ({
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
      d="m14.856 2.253-6.993.016c-1.654.004-3.053.598-4.034 1.656-.976 1.051-1.483 2.502-1.48 4.129l.02 7.938c.003 1.626.514 3.074 1.494 4.121.986 1.054 2.388 1.64 4.046 1.637h.002l3.962-.02a.75.75 0 0 0-.008-1.5l-3.96.02c-1.288.002-2.276-.445-2.947-1.162-.676-.723-1.087-1.783-1.09-3.1L3.85 8.05c-.003-1.316.404-2.378 1.078-3.105.67-.722 1.656-1.173 2.939-1.176l.638-.001.007 5.919a.75.75 0 0 0 .985.711l2.616-.862 2.598.846a.75.75 0 0 0 .982-.715l-.014-5.916.613-.001c1.287-.003 2.276.443 2.947 1.16.677.724 1.088 1.785 1.09 3.1v.002l.02 4.592a.75.75 0 1 0 1.5-.006l-.02-4.59c-.003-1.626-.515-3.075-1.495-4.122-.985-1.053-2.388-1.64-4.046-1.636l-1.294.003a1 1 0 0 0-.138 0m-4.851 1.512.006 4.884 1.865-.614a.75.75 0 0 1 .467-.001l1.848.601-.012-4.88zm6.681 12.822a.75.75 0 0 1 1.061 0l1.411 1.411 1.411-1.411a.75.75 0 1 1 1.06 1.06l-1.41 1.412 1.41 1.41a.75.75 0 1 1-1.06 1.061l-1.41-1.41-1.412 1.41a.75.75 0 0 1-1.06-1.06l1.41-1.411-1.41-1.411a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryCloseOutline;
