import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingHeartBroken = ({
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
      d="M12.5 4.704a5.64 5.64 0 0 1 3.536-1.231c.535 0 1.068.099 1.6.27 3.333 1.073 4.53 4.702 3.513 7.877M12.5 4.704c-1.234.988-2.02 2.483-2.02 4.156 0 1.233.905 2.233 2.02 2.233 1.116 0 2.02-1 2.02-2.233 0-1.673-.786-3.168-2.02-4.156m0 0a5.64 5.64 0 0 0-3.535-1.231 6.7 6.7 0 0 0-1.61.27C4.024 4.816 2.837 8.445 3.853 11.62c1.638 5.09 8.649 8.907 8.649 8.907s3.966-2.176 6.621-5.383"
    />
  </Svg>
);
export default IconlystRingHeartBroken;
