import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmill2Broken = ({
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
      d="m4.674 6.13 4.431.56M14.084 13.018l1.735-7.043c1.82.342 3.047.23 4.204-3.075M6.75 6.438l1.196 4.795M7.947 14.97h2.047M14.652 18.336a2.515 2.515 0 0 0 .712-4.927l-6.896-2.033A3.501 3.501 0 0 0 4.54 16.64l.033.051a3.61 3.61 0 0 0 3.028 1.645h3.846M5.156 20.594v.118m.476-.092a.48.48 0 1 1-.958 0 .48.48 0 0 1 .958 0M17.17 20.594v.118m.475-.092a.48.48 0 1 1-.958 0 .48.48 0 0 1 .958 0"
    />
  </Svg>
);
export default IconlystTreadmill2Broken;
