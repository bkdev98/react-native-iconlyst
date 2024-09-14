import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy1Bulk = ({
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
      fillRule="evenodd"
      d="M15.31 6.11c.11 0 .2-.09.195-.2-.089-1.919-1.45-3.41-3.446-3.41H6.87c-2.07 0-3.45 1.45-3.45 3.6v6.69c0 2.043 1.374 3.504 3.37 3.596.11.005.2-.085.2-.196v-4.98c0-2.95 2.08-5.1 4.95-5.1z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.135 7.613H11.94c-2.061 0-3.446 1.445-3.446 3.596v6.695c0 2.15 1.385 3.596 3.446 3.596h5.194c2.062 0 3.447-1.446 3.447-3.596V11.21c0-2.15-1.385-3.596-3.446-3.596"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy1Bulk;
