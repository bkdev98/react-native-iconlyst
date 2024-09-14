import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginOutlinecurved = ({
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
      d="M2 12.12a.75.75 0 0 1 .75-.75h12.041a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.333 8.675a.75.75 0 0 1 1.06-.002l2.928 2.916a.75.75 0 0 1 0 1.063l-2.927 2.916a.75.75 0 0 1-1.059-1.063l2.394-2.384-2.394-2.385a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.33 4.45c-.776.576-1.165 1.516-1.324 3.249a.75.75 0 1 1-1.494-.138c.17-1.848.617-3.347 1.925-4.316C9.692 2.315 11.581 2 14.26 2c3.55 0 5.732.556 6.852 2.38.534.869.77 1.945.885 3.177.114 1.228.114 2.702.114 4.411v.063c0 1.71 0 3.184-.114 4.411-.115 1.233-.35 2.309-.885 3.178C19.991 21.443 17.81 22 14.26 22c-2.678 0-4.567-.316-5.822-1.245-1.308-.97-1.755-2.468-1.925-4.316a.75.75 0 1 1 1.494-.138c.16 1.732.548 2.673 1.324 3.249.831.615 2.276.95 4.929.95 3.551 0 4.919-.599 5.574-1.665.354-.576.562-1.379.67-2.531.106-1.15.107-2.557.107-4.304s0-3.154-.108-4.304c-.107-1.153-.315-1.955-.669-2.531C19.178 4.098 17.81 3.5 14.26 3.5c-2.653 0-4.098.334-4.929.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoginOutlinecurved;
