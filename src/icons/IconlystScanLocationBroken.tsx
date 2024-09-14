import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLocationBroken = ({
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
      d="M21.25 8.47V6.895a3.89 3.89 0 0 0-3.893-3.892H16.1M3.25 8.47V6.895a3.89 3.89 0 0 1 3.893-3.892h1.289M3.25 15.53v1.576a3.89 3.89 0 0 0 3.893 3.892H8.4M21.25 15.53v1.576a3.89 3.89 0 0 1-3.893 3.892h-1.289M9.152 13.918c1.036 1.635 2.657 2.833 3.08 2.833.635 0 3.972-2.701 3.972-5.527a3.972 3.972 0 0 0-7.855-.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.234 10.965v.048m.194-.038a.196.196 0 1 1-.39 0 .196.196 0 0 1 .39 0"
    />
  </Svg>
);
export default IconlystScanLocationBroken;
