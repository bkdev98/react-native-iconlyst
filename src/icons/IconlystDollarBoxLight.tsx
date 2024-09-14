import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBoxLight = ({
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
      d="M7.782 3.063h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.063 3 18.983 3 16.037V8.09c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.31 9.238h-2.625a1.414 1.414 0 1 0 0 2.828H15.3a1.414 1.414 0 1 1 0 2.827h-2.625M14.492 14.893v1.187m0-8.035v1.198M7.887 3.063v18"
    />
  </Svg>
);
export default IconlystDollarBoxLight;
