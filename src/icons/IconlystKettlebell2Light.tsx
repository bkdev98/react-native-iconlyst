import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell2Light = ({
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
      d="M16.925 18.998a6.935 6.935 0 1 1-9.808-9.809 6.935 6.935 0 0 1 9.808 9.809"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.203 10.326c.448-.804 1.084-1.336 1.688-2.29C8.895 6.45 6.687 4.533 9.22 3.554c0 0 .99-.525 2.737-.525 1.82 0 2.887.525 2.887.525 2.534.98.326 2.895 1.33 4.482.604.954 1.24 1.486 1.688 2.29M8.414 12.111v3.678M10.9 12.244 8.865 13.95l2.035 1.707M15.381 12.193a2 2 0 0 0-.77-.2c-1.026-.052-1.876.832-1.918 1.858-.046 1.128.702 2.06 1.819 2.06.654 0 1.12-.233 1.12-.886V13.95h-1.12"
    />
  </Svg>
);
export default IconlystKettlebell2Light;
