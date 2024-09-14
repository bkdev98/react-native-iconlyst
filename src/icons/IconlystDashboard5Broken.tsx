import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard5Broken = ({
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
      d="M17.391 4.625A8.96 8.96 0 0 0 12.231 3a9 9 0 1 0 7.599 4.175M12.23 3v2.474m0 15.526v-2.25m9-6.75h-2.25M3.23 12h2.476"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.231 9.256c.954.78 1.852 2.146 2.048 3.025.197.878-.26 2.606-2.048 2.606s-2.245-1.728-2.048-2.606c.06-.273.19-.592.366-.926"
    />
  </Svg>
);
export default IconlystDashboard5Broken;
