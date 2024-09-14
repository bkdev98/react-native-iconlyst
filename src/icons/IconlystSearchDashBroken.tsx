import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDashBroken = ({
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
      d="M3 13.981v-3.963M21 13.981v-3.963M13.979 3h-3.963M13.979 21h-3.963M3.025 16.914c.313 2.233 1.795 3.803 4.047 4.066M16.89 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.025 7.095c.313-2.233 1.795-3.812 4.047-4.076M16.89 3.019c2.253.264 3.725 1.843 4.037 4.076M11.699 8.369A3.25 3.25 0 1 1 9.25 9.48M13.912 13.999l1.636 1.632"
    />
  </Svg>
);
export default IconlystSearchDashBroken;
