import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogAllowedLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.55a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.802 14.575c-.594 1.465-1.788 2.98-2.976 4.498"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.545 11.438c-.283 4.284-4.218 2.514-4.218 2.514l1.21-4.05c.824-2.44 2.482-2.947 4.017-2.722l1.004.139c1.767.223 2.146 1.528 2.146 2.196l2.854 1.418c-.091 1.087-.726 3.181-2.537 2.865-1.812-.316-2.397-.507-2.463-.563-.975 3.078-.45 5.15-.22 8.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.972 16.63c1.174.836 4.143 2.232 6.624 1.131M13.22 9.901v.011"
    />
  </Svg>
);
export default IconlystDogAllowedLight;
