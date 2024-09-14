import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleDashLight = ({
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
      d="M7.155 20.099H5c-1.535 0-2.497-1.661-1.73-2.982l1.079-1.875M5.748 12.815l2.118-3.653M14.12 20.1H9.953M19.667 15.252l1.068 1.875c.758 1.32-.204 2.972-1.729 2.972h-2.098M16.2 9.162l2.078 3.643M9.264 6.733l1.059-1.836c.767-1.33 2.69-1.33 3.457.01l1.04 1.826"
    />
  </Svg>
);
export default IconlystTriangleDashLight;
