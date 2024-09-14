import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryBulkcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25C5.051 2.25 2.5 4.802 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14.451 13.756 1.417-4.528a.675.675 0 0 0-.846-.846l-4.53 1.417a.67.67 0 0 0-.443.443l-1.418 4.53a.676.676 0 0 0 .847.846l4.53-1.418a.68.68 0 0 0 .443-.444"
    />
  </Svg>
);
export default IconlystDiscoveryBulkcurved;
