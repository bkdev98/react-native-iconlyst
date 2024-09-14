import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleSquareBroken = ({
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
      d="M10.478 16.556v-8.2h2.934a2.229 2.229 0 1 1 0 4.458h-3.89M9.521 14.816h2.571"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 21.063H7.782C4.834 21.063 3 18.98 3 16.035V8.09c0-2.945 1.843-5.026 4.782-5.026h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.026-4.784 5.026h-.666"
    />
  </Svg>
);
export default IconlystRubleSquareBroken;
