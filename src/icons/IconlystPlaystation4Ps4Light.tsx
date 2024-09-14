import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation4Ps4Light = ({
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
      d="M8.34 14.849s.422.002 1.052-.002c1.216-.006 1.92-.704 1.936-1.915l.019-1.863c.015-1.21.72-1.908 1.935-1.915l1.053-.002M3 9.133h3.228a1.539 1.539 0 0 1 .008 3.077l-1.86.001a1.377 1.377 0 0 0-1.375 1.378v1.282M19.532 14.853V13.55m0 0H21m-1.468 0H15.31l4.223-4.417z"
    />
  </Svg>
);
export default IconlystPlaystation4Ps4Light;
