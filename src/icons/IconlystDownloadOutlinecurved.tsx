import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadOutlinecurved = ({
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
      d="M11.88 2a.75.75 0 0 1 .75.75v12.041a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.434 11.333a.75.75 0 0 1 1.06.002l2.385 2.394 2.385-2.394a.75.75 0 0 1 1.063 1.058l-2.916 2.928a.75.75 0 0 1-1.063 0l-2.916-2.928a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.623 7.19a.75.75 0 0 1 .816-.678c1.847.17 3.346.617 4.316 1.925C21.685 9.691 22 11.581 22 14.26c0 3.55-.557 5.731-2.38 6.851-.87.534-1.946.77-3.178.884-1.227.115-2.701.115-4.41.115h-.063c-1.71 0-3.184 0-4.412-.115-1.232-.114-2.308-.35-3.177-.884C2.557 19.99 2 17.808 2 14.26c0-2.678.316-4.568 1.245-5.822.97-1.308 2.469-1.755 4.316-1.925A.75.75 0 0 1 7.7 8.006c-1.732.16-2.673.547-3.249 1.324-.615.83-.95 2.276-.95 4.929 0 3.55.598 4.918 1.665 5.573.576.354 1.378.562 2.531.669 1.15.107 2.557.108 4.304.108s3.153-.001 4.304-.108 1.955-.315 2.53-.669c1.068-.655 1.666-2.023 1.666-5.573 0-2.653-.334-4.098-.95-4.929-.576-.777-1.517-1.165-3.249-1.324a.75.75 0 0 1-.678-.816"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownloadOutlinecurved;
