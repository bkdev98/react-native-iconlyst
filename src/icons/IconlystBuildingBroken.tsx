import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.72 13.159c.006-.454.22-.88.583-1.152l3.963-3.181a1.924 1.924 0 0 1 2.386 0l3.98 3.178c.36.273.574.697.582 1.149v5.278a2.09 2.09 0 0 1-2.103 2.079h-7.29a2.09 2.09 0 0 1-2.1-2.08v-1.915M9.466 16.723v3.548M18.286 20.4h1.298c1.18 0 2.137-.957 2.137-2.137v-6.015M12.236 6.495v-.879c0-1.173.951-2.124 2.124-2.124h5.224c1.18 0 2.136.957 2.136 2.137v3.159M18.487 16.259v.01M18.487 12.046v-.01M15.428 7.813v.01M18.487 7.813v.01"
    />
  </Svg>
);
export default IconlystBuildingBroken;
