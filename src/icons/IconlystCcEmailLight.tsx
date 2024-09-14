import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCcEmailLight = ({
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
      d="M7.314 3.081h9.371C19.961 3.081 22 5.393 22 8.666v6.668c0 3.273-2.039 5.585-5.316 5.585h-9.37C4.038 20.919 2 18.607 2 15.334V8.666C2 5.393 4.048 3.08 7.314 3.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.663 14.29a2.88 2.88 0 0 1-3.751-.26 2.86 2.86 0 0 1 0-4.053 2.855 2.855 0 0 1 3.751-.26M17.926 9.974a2.868 2.868 0 0 0-4.054 4.054 2.87 2.87 0 0 0 4.054 0"
    />
  </Svg>
);
export default IconlystCcEmailLight;
