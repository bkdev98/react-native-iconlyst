import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockOutlinecurved = ({
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
      fill={props.color}
      d="M12 17.464a.75.75 0 0 1-.75-.75v-2.221a.75.75 0 0 1 1.5 0v2.22a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.18 8.77V7.587a3.807 3.807 0 0 1 3.77-3.75h.046a3.82 3.82 0 0 1 3.644 2.703.75.75 0 1 0 1.437-.432 5.32 5.32 0 0 0-5.08-3.771h-.067c-2.885.035-5.19 2.328-5.25 5.234v1.695c-2.19 1.002-3.09 2.949-3.09 6.165 0 5.119 2.28 7.022 8.41 7.022s8.41-1.903 8.41-7.022S18.131 8.411 12 8.411c-1.495 0-2.76.113-3.82.358M7.6 10.47a.7.7 0 0 0 .166-.06c1.03-.357 2.412-.5 4.233-.5 5.36 0 6.91 1.238 6.91 5.521 0 4.284-1.55 5.522-6.91 5.522s-6.91-1.238-6.91-5.522c0-2.748.638-4.243 2.511-4.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnlockOutlinecurved;
