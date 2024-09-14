import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodProLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.134 5.01a3.59 3.59 0 0 0-2.87-.979 1.333 1.333 0 0 0-1.223 1.316v5.497c0 .689.538 1.253 1.224 1.316a3.6 3.6 0 0 0 2.93-1.039c.237-.236.357-.565.357-.9V5.974c0-.367-.152-.711-.418-.964M11.265 7.454h-1.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.303 11.641c-1.093.965-2.617 1.558-4.315 1.558-.162 0-.325 0-.488-.023l1.446 4.887c.299 1.228-.357 2.523-1.598 2.858a2.287 2.287 0 0 1-2.737-1.403c-.998-2.642-2.417-6.939-2.601-10.587C4.809 5.458 7.674 3 10.988 3c1.698 0 3.222.605 4.315 1.57"
    />
  </Svg>
);
export default IconlystRightAirpodProLight;
