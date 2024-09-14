import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRefreshLight = ({
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
      d="M7.028 3.285h9.943A4.03 4.03 0 0 1 21 7.315v5.456a4.03 4.03 0 0 1-4.03 4.029H7.029A4.03 4.03 0 0 1 3 12.77V7.315a4.03 4.03 0 0 1 4.028-4.029M7.055 20.715h9.888M9.883 16.799l-.637 3.917M14.115 16.799l.637 3.917"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.36 11.443a2.91 2.91 0 0 1-2.522 1.454c-1.606 0-2.594-1.616-2.594-1.616M9.309 8.538a2.9 2.9 0 0 1 2.53-1.464c1.948 0 2.917 1.616 2.917 1.616"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.756 6.885v1.794h-1.795M11.04 11.273H9.243v1.67"
    />
  </Svg>
);
export default IconlystMonitorDisplayRefreshLight;
