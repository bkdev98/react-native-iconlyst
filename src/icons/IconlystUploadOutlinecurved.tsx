import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadOutlinecurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.12 15a.75.75 0 0 1-.75-.75V2.209a.75.75 0 0 1 1.5 0V14.25a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.676 5.667a.75.75 0 0 1-.003-1.06l2.916-2.929a.75.75 0 0 1 1.063 0l2.916 2.928a.75.75 0 0 1-1.063 1.059l-2.384-2.394-2.385 2.394a.75.75 0 0 1-1.06.002M4.45 9.712c.576-.777 1.517-1.165 3.249-1.325a.75.75 0 1 0-.138-1.494c-1.848.17-3.347.617-4.316 1.926C2.315 10.073 2 11.963 2 14.64c0 3.55.557 5.733 2.38 6.853.869.534 1.945.77 3.177.884 1.228.114 2.702.114 4.411.114h.064c1.709 0 3.183 0 4.41-.114 1.233-.115 2.309-.35 3.178-.884C21.443 20.373 22 18.19 22 14.64c0-2.677-.316-4.567-1.245-5.821-.97-1.309-2.468-1.755-4.316-1.926a.75.75 0 1 0-.138 1.494c1.732.16 2.673.548 3.249 1.325.616.83.95 2.276.95 4.928 0 3.551-.599 4.92-1.665 5.575-.576.353-1.379.561-2.531.669-1.15.107-2.557.107-4.304.107s-3.153 0-4.304-.107c-1.153-.108-1.955-.316-2.53-.67C4.097 19.56 3.5 18.192 3.5 14.64c0-2.652.335-4.098.95-4.928"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUploadOutlinecurved;
