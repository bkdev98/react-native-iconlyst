import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire3Broken = ({
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
      d="M18.804 17.647c-1.025 1.606-2.656 2.803-4.847 3.164C6.661 22.409 1.793 13.5 7.275 8.278c.293-.289 1.1-1.037 1.436-1.277 0 .5.442 4.373 1.132 4.08 2.842 0 3.605-5.08 3.213-8.081 2.558 1.337 4.725 3.2 5.998 5.85a9.3 9.3 0 0 1 1.012 4.751"
    />
  </Svg>
);
export default IconlystFire3Broken;
