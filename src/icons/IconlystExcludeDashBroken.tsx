import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExcludeDashBroken = ({
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
      d="M6.42 21C4.305 21 3 19.514 3 17.409V11.72c0-2.105 1.313-3.6 3.42-3.6h3.465M15.878 13.846v3.564c0 2.105-1.314 3.59-3.429 3.59H9.435"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.992 15.88c-1.623-.048-2.688-1.114-2.87-2.665M13.006 8.121c1.623.048 2.688 1.114 2.871 2.665"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.57 3C19.687 3 21 4.494 21 6.6v5.688c0 2.106-1.314 3.59-3.43 3.59h-4.085M8.121 10.245V6.6c0-2.106 1.315-3.6 3.42-3.6h2.495"
    />
  </Svg>
);
export default IconlystExcludeDashBroken;
