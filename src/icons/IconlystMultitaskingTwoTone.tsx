import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultitaskingTwoTone = ({
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
      d="M3.5 4.396v15.208M21.5 4.396v15.208"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.976 3.469h5.074c1.728 0 3.129 1.4 3.129 3.128v10.808a3.13 3.13 0 0 1-3.13 3.128H9.977a3.13 3.13 0 0 1-3.128-3.128V6.597c0-1.728 1.4-3.128 3.128-3.128"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMultitaskingTwoTone;
