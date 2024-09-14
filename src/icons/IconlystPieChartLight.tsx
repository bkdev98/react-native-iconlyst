import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPieChartLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.107 3.748C6.862 4.015 3.5 7.66 3.5 12.118c0 2.823 1.347 5.32 3.413 6.84a7.9 7.9 0 0 0 4.194 1.532c.276.018.5-.208.5-.485V4.232a.477.477 0 0 0-.5-.484M21.499 14.263a.473.473 0 0 0-.482-.5h-5.743a.5.5 0 0 0-.5.5v5.743c0 .276.224.502.5.482a6.7 6.7 0 0 0 1.834-.397 6.75 6.75 0 0 0 4.39-5.828M21.017 10.475a.474.474 0 0 0 .482-.5 6.745 6.745 0 0 0-6.225-6.225.474.474 0 0 0-.5.482v5.742a.5.5 0 0 0 .5.5z"
    />
  </Svg>
);
export default IconlystPieChartLight;
