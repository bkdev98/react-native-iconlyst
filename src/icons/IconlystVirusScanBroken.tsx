import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusScanBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 8.793V7.216a3.893 3.893 0 0 1 3.893-3.892h1.289M21.248 15.856v1.577a3.893 3.893 0 0 1-3.893 3.892h-1.289M21.252 8.793V7.216a3.89 3.89 0 0 0-3.893-3.892h-1.257M3.25 15.856v1.577a3.893 3.893 0 0 0 3.893 3.892H8.4M10.387 16.224a2.49 2.49 0 0 1-.992-1.99v-1.65a2.49 2.49 0 0 1 2.49-2.49h.729a2.49 2.49 0 0 1 2.49 2.49v1.65a2.49 2.49 0 0 1-1.887 2.417"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.277 8.438.121.713a1.9 1.9 0 0 0 1.18 1.454l1.3.508M9.395 12.584c-.886-.067-1.768-.153-2.793.259M7.277 16.97l.124-.713a1.9 1.9 0 0 1 1.177-1.45l.837-.323M15.09 14.484l.829.323a1.93 1.93 0 0 1 1.186 1.45l.115.713M15.106 12.584c.886-.067 1.768-.153 2.792.259M17.222 8.438l-.122.713a1.91 1.91 0 0 1-1.178 1.454l-1.3.508M10.594 10.46V9.335a1.658 1.658 0 1 1 3.315 0v1.127"
    />
  </Svg>
);
export default IconlystVirusScanBroken;
