import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkBroken = ({
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
      d="M18.708 5.544c-2.052-2.052-5.417-2.06-7.475 0L10.206 6.57M17.682 14.042l1.025-1.026a5.29 5.29 0 0 0 1.505-4.371M5.795 18.457c2.052 2.052 5.416 2.06 7.476 0l1.02-1.02M6.814 9.96l-1.02 1.02a5.28 5.28 0 0 0-1.516 4.28"
    />
  </Svg>
);
export default IconlystLinkBroken;
