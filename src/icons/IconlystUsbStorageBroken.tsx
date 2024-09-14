import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorageBroken = ({
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
      d="M3.934 12.014c-1.315 1.314-1.208 3.07.11 4.387l3.554 3.554c1.317 1.317 3.068 1.428 4.386.109l5.142-5.142c1.32-1.32 1.21-3.07-.108-4.388L13.463 6.98c-1.316-1.317-3.068-1.427-4.387-.109L6.505 9.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.88 11.831 2.454-2.453c.939-.938.857-2.186-.075-3.117l-2.521-2.52c-.932-.933-2.178-1.014-3.117-.076l-2.453 2.453M16.172 6.033l.01-.01M17.932 7.795l.01-.01M9.68 17.084l1.935-1.936"
    />
  </Svg>
);
export default IconlystUsbStorageBroken;
