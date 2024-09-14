import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan1Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.15 20.25H6.893a3.145 3.145 0 0 1-3.143-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.643 4.64H8.15a.75.75 0 0 0 0-1.5M8.182 2.25H6.893A4.647 4.647 0 0 0 2.25 6.89v1.58a.75.75 0 0 0 1.5 0V6.89c0-1.732 1.41-3.14 3.143-3.14h1.29a.75.75 0 0 0 0-1.5M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.257a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0V6.89a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.734 19.155a.75.75 0 1 0-1.06 1.061l1.095 1.092a.746.746 0 0 0 1.06 0 .75.75 0 0 0-.001-1.06zM14.998 10.668a4.607 4.607 0 0 0-4.604 4.6 4.61 4.61 0 0 0 4.604 4.608 4.61 4.61 0 0 0 4.603-4.608c0-2.537-2.065-4.6-4.603-4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchScan1Bulk;
