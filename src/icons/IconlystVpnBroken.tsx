import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVpnBroken = ({
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
      d="M12.5 19.826H6.567c-2.507 0-4.067-1.77-4.067-4.275V8.45c0-2.505 1.568-4.275 4.067-4.275h11.866c2.507 0 4.067 1.77 4.067 4.275v7.102c0 2.504-1.56 4.275-4.068 4.275h-2.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.12 14.635v-4.624l3.404 4.49M19.524 11.078V9.88M11.215 12.868h1.375a1.523 1.523 0 0 0 0-3.046h-1.375zm0 0v1.827M5.172 9.918l1.95 4.682L9.07 9.918"
    />
  </Svg>
);
export default IconlystVpnBroken;
