import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBlockBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.515 8.252a.21.21 0 0 1-.183-.18c-.294-2.108-2.009-4.74-5.33-4.74-3.571 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222c.307.125.598.208.86.264.129.028.243-.08.236-.21a5.622 5.622 0 0 1 5.609-5.924 5.6 5.6 0 0 1 3.97 1.646q.007.006.015.013.02.022.037.045a5.6 5.6 0 0 1 1.585 4.226c-.007.13.106.238.234.212.277-.055.589-.14.925-.275a4.64 4.64 0 0 0 2.715-4.219c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.981 19.169a2.3 2.3 0 0 1-1.023-.242l3.146-3.152c.152.31.244.657.244 1.027a2.37 2.37 0 0 1-2.367 2.367m0-4.734c.388 0 .75.103 1.072.269l-3.168 3.174a2.3 2.3 0 0 1-.27-1.076 2.37 2.37 0 0 1 2.366-2.367m2.75-.351-.009-.006a3.85 3.85 0 0 0-2.74-1.143 3.87 3.87 0 0 0-3.868 3.867 3.85 3.85 0 0 0 1.151 2.747l.005.008c.007.007.016.009.022.015a3.85 3.85 0 0 0 2.69 1.097 3.87 3.87 0 0 0 3.866-3.867 3.85 3.85 0 0 0-1.1-2.692c-.007-.008-.009-.02-.017-.026"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudBlockBold;
