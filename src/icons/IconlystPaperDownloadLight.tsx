import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownloadLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M14.737 2.762H8.085A3.82 3.82 0 0 0 4.25 6.49v10.737a3.807 3.807 0 0 0 3.724 3.887h8.098a3.867 3.867 0 0 0 3.73-3.887v-9.19z" />
      <Path d="M14.475 2.75v2.91a2.575 2.575 0 0 0 2.569 2.574h2.754M11.642 15.95V9.909M9.296 13.594l2.345 2.355 2.345-2.355" />
    </G>
  </Svg>
);
export default IconlystPaperDownloadLight;
