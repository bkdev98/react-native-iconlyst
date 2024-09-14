import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.65 21.187a1 1 0 0 1-.81-.414l-3.569-4.93a1 1 0 0 1 .81-1.585h13.837a1 1 0 0 1 0 2H7.04L9.46 19.6a.999.999 0 0 1-.81 1.586"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.918 10.116H5.081a1 1 0 0 1 0-2h11.88l-2.42-3.343A.999.999 0 1 1 16.16 3.6l3.567 4.93a1 1 0 0 1-.81 1.586"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwapHorizontalBulk;
