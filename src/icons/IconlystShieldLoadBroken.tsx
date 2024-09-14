import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLoadBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.006 18.604a1.967 1.967 0 1 0 3.933-.001 1.967 1.967 0 0 0-3.933 0M16.647 5.963a1.966 1.966 0 1 0 3.931 0 1.966 1.966 0 0 0-3.931 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.95 12.572c0 2.252-2.7 3.069-2.7 3.069s-2.699-.816-2.699-3.07-.098-2.43.12-2.646c.216-.216 2.225-.917 2.58-.917.353 0 2.58.917 2.58.917M12.254 3.324c1.779 0 3.437.52 4.826 1.408M3.25 12.31A9 9 0 0 1 8.52 4.13M21.25 12.32a9 9 0 0 1-5.657 8.365M12.254 21.325a8.93 8.93 0 0 1-4.826-1.407"
    />
  </Svg>
);
export default IconlystShieldLoadBroken;
