import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrikethroughBulk = ({
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
      fill={props.color}
      d="M8.408 10.2a1 1 0 0 1-.97-.758 3.8 3.8 0 0 1-.114-.948C7.324 5.976 9.379 4 12.002 4c1.98 0 3.698 1.126 4.375 2.868a1 1 0 0 1-1.864.725C14.13 6.61 13.169 6 12.002 6c-1.527 0-2.678 1.075-2.678 2.5-.001.158.017.305.055.458a1 1 0 0 1-.971 1.242"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M5.881 13h12.238a1 1 0 1 0 0-2h-5.334a1 1 0 0 0-.124 0H5.88a1 1 0 1 0 0 2"
    />
    <Path
      fill={props.color}
      d="M12 20c-2.698 0-4.894-2.02-4.894-4.5a1 1 0 1 1 2 0c0 1.378 1.298 2.5 2.894 2.5s2.894-1.122 2.894-2.5c0-1.194-.576-1.817-2.354-2.5h3.557c.473.621.797 1.432.797 2.5 0 2.48-2.195 4.5-4.894 4.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStrikethroughBulk;
