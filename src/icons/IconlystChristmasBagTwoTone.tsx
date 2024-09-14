import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.27 8.948V6.321a2.956 2.956 0 0 1 5.912 0v2.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.577 7.016v-.695a2.956 2.956 0 0 0-4.651-2.422"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.813 7.038h-5.89a1.5 1.5 0 0 0-1.495 1.387l-.889 11.827a1.5 1.5 0 0 0 1.496 1.613h6.52M12.354 7.038h2.128a1.5 1.5 0 0 1 1.496 1.387l.888 11.827a1.5 1.5 0 0 1-1.496 1.613h-3.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.295 16.698v1.828m2.278-1.828H7.879l1.173-2.033H7.48l2.746-3.443 2.745 3.443h-1.572z"
      opacity={0.3}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.813 7.038h5.89a1.5 1.5 0 0 1 1.491 1.34l1.262 11.828c.06.56.142 1.076-.033 1.38-.224.389-.78.077-1.065-.27l-.558-.681-.147.248a2 2 0 0 1-1.72.982h-5.38"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasBagTwoTone;
