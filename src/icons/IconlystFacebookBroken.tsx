import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookBroken = ({
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
      d="M17.277 8.602h-1.004a2.82 2.82 0 0 0-2.822 2.821V21M11.537 13.385H16.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.751 3h4.217c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.843 5.026-4.782 5.026H8.533c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.75 5.081 5.585 3 8.534 3h.567"
    />
  </Svg>
);
export default IconlystFacebookBroken;
