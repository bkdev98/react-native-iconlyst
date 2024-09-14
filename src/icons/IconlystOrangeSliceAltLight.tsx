import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeSliceAltLight = ({
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
      d="M4.94 3.742c.598-.867 1.826-1.002 2.571-.257l13.004 13.006c.745.745.61 1.975-.257 2.573-4.291 2.955-10.215 2.527-14.033-1.286C2.408 13.956 1.98 8.036 4.94 3.742"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.426 20.983-.48-11.064H3M13.945 9.919l-7.79 7.78"
    />
  </Svg>
);
export default IconlystOrangeSliceAltLight;
