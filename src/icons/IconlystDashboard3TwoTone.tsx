import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard3TwoTone = ({
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
      d="M12.98 3v2.25m-6.363.387 1.591 1.59m11.136 11.138-1.75-1.75m-10.977 1.75 1.75-1.75M19.346 5.637l-1.591 1.59M3.98 12h2.476m15.525 0h-2.25"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.981 14.887c-1.788 0-2.245-1.728-2.048-2.606.197-.879 1.094-2.245 2.048-3.025.954.78 1.852 2.146 2.048 3.025.197.878-.26 2.606-2.048 2.606"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard3TwoTone;
