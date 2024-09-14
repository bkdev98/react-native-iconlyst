import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthBroken = ({
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
      d="M11.174 21a9.035 9.035 0 1 1 10.08-9.988"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.25 7.957c-.153 1.672-1.036 3.517-4.005 4.078M4.306 16.274c.873-.282 1.945-.809 3.233-1.729 1.682-1.212 2.641-.3 2.979 1.57M16.913 13.414a3.11 3.11 0 1 1-2.665 1.507M19.03 18.8l1.564 1.561M12.68 3s-.615 2.546 1.146 3.922C15.586 8.3 16.9 8.198 17.12 9.948"
    />
  </Svg>
);
export default IconlystEarthBroken;
