import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiqualityLight = ({
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
      d="M18 9c-.96 0-2.074.615-2.947 1.252A5.16 5.16 0 0 1 12 11.25v0a5.16 5.16 0 0 1-3.052-.998C8.073 9.615 6.96 9 6 9a3 3 0 1 0 0 6c.96 0 2.074-.615 2.948-1.252A5.16 5.16 0 0 1 12 12.75a5.16 5.16 0 0 1 3.053.998C15.926 14.385 17.04 15 18 15a3 3 0 0 0 0-6"
    />
  </Svg>
);
export default IconlystLiqualityLight;
