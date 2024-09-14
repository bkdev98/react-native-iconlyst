import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard3Broken = ({
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
      d="M12.23 21a9 9 0 1 1 3.343-.641M12.23 3v2.25m-6.363.387 1.591 1.59m11.136 11.138-1.75-1.75m-10.977 1.75 1.75-1.75M18.596 5.637l-1.591 1.59M3.23 12h2.476m15.525 0h-2.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.231 9.256c.954.78 1.852 2.146 2.048 3.025.197.878-.26 2.606-2.048 2.606s-2.245-1.728-2.048-2.606c.066-.298.213-.65.415-1.018"
    />
  </Svg>
);
export default IconlystDashboard3Broken;
