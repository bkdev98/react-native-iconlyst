import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerBold = ({
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
      d="M9.425 11.998a2.58 2.58 0 0 1 2.576-2.575 2.58 2.58 0 0 1 2.575 2.575A2.577 2.577 0 0 1 12 14.572a2.577 2.577 0 0 1-2.576-2.574"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.504 11.251H21a.75.75 0 1 1 0 1.5h-1.496a7.555 7.555 0 0 1-6.754 6.754v1.494a.75.75 0 0 1-1.5 0v-1.494a7.556 7.556 0 0 1-6.753-6.754H3a.75.75 0 0 1 0-1.5h1.497a7.555 7.555 0 0 1 6.753-6.753V3.001a.75.75 0 0 1 1.5 0v1.497a7.554 7.554 0 0 1 6.754 6.753m-6.754 6.016v.724a6.046 6.046 0 0 0 5.24-5.24h-.723a.75.75 0 0 1 0-1.5h.723a6.046 6.046 0 0 0-5.24-5.239v.722a.75.75 0 1 1-1.5 0v-.722a6.044 6.044 0 0 0-5.239 5.239h.723a.75.75 0 0 1 0 1.5h-.723a6.045 6.045 0 0 0 5.239 5.24v-.724a.75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMarkerBold;
