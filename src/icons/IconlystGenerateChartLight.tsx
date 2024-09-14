import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateChartLight = ({
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
      d="M11.515 3H7.783C4.843 3 3 5.081 3 8.026v7.948C3 18.919 4.835 21 7.783 21h8.434C19.166 21 21 18.919 21 15.974V11.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.572 17.122 2.627-2.786 3.816 2.528 2.576-2.528M10.823 10.724V8.731M7.06 10.724V7.558M17.502 3l-.136.368a5.07 5.07 0 0 1-2.994 2.999l-.368.136.368.137a5.07 5.07 0 0 1 2.994 2.998l.136.369.136-.369a5.07 5.07 0 0 1 2.994-2.998L21 6.503l-.368-.136a5.07 5.07 0 0 1-2.994-2.999z"
    />
  </Svg>
);
export default IconlystGenerateChartLight;
