import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpTriangleLight = ({
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
      d="M11.999 10.62v6m0-6 2.34 2.349M12 10.619 9.66 12.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.996 20.1h14.008c1.529 0 2.489-1.65 1.732-2.98l-6.96-12.214c-.762-1.338-2.689-1.343-3.458-.01L3.27 17.113c-.767 1.329.192 2.989 1.726 2.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpTriangleLight;
