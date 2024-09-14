import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.191 8.163-4.999 5m-5.764 5.764L6.5 15.853M20.723 6.77l-2.691 2.69m-8.073 8.073 5.382-5.382M13.878 3.996 8.496 9.378M3.114 14.76l2.691-2.691M8.81 4.443 4.433 8.82M21.114 10.885l-4.377 4.377M14.191 17.63l-2.594 2.594M5.1 3.776 3.766 5.11M19.593 16.866 18.258 18.2M18.513 3.996l-1.335 1.335"
    />
  </Svg>
);
export default IconlystRainLight;
