import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard5TwoTone = ({
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
      d="M21.98 12a9 9 0 0 0-9-9 9 9 0 1 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.98 3v2.474m0 15.526v-2.25m9-6.75h-2.25M3.98 12h2.476"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.981 14.887c-1.788 0-2.245-1.728-2.048-2.606.197-.879 1.094-2.245 2.048-3.025.954.78 1.852 2.146 2.048 3.025.197.878-.26 2.606-2.048 2.606"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDashboard5TwoTone;
