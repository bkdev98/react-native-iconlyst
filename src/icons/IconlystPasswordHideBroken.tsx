import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordHideBroken = ({
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
      d="M10.283 17.57h-2.41c-2.851 0-4.624-2.012-4.624-4.86V8.79c0-2.846 1.782-4.858 4.624-4.858h.824M20.649 10.953V8.789c0-2.847-1.773-4.86-4.623-4.86h-4.077M15.424 19.697a5.36 5.36 0 0 1-1.556-2.13 5.4 5.4 0 0 1 1.57-2.139 3.4 3.4 0 0 1 2.121-.774c.778.01 1.53.285 2.13.78M20.707 14.424l-6.294 6.294M21.25 17.568c-.784 1.82-2.17 2.913-3.69 2.913M11.95 10.703v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0M15.854 10.703v-.064m-.26.05a.261.261 0 1 1 .523 0 .261.261 0 0 1-.522 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.044 10.703v-.064m-.26.05a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystPasswordHideBroken;
