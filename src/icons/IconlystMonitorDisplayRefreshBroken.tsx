import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRefreshBroken = ({
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
      d="M12.5 3.285H7.527A4.03 4.03 0 0 0 3.5 7.315v5.456A4.03 4.03 0 0 0 7.528 16.8h9.943a4.03 4.03 0 0 0 4.029-4.03V7.315a4.03 4.03 0 0 0-4.03-4.029h-1.45M7.555 20.715h9.888M10.383 16.799l-.637 3.917M14.615 16.799l.637 3.917"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.86 11.443a2.91 2.91 0 0 1-2.522 1.454c-1.606 0-2.594-1.616-2.594-1.616M9.809 8.538a2.9 2.9 0 0 1 2.53-1.464c1.948 0 2.917 1.616 2.917 1.616"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.256 6.885v1.794h-1.795M11.54 11.273H9.743v1.67"
    />
  </Svg>
);
export default IconlystMonitorDisplayRefreshBroken;
