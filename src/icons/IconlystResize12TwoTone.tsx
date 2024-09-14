import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize12TwoTone = ({
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
      d="M9.177 5.258 5.5 5.25l.008 3.677M15.822 19.24l3.678.007-.009-3.677M5.5 5.25l14 13.997"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.5 19.247 3.677-.008m-3.677.008.008-3.677M5.5 19.247l14-13.997m-3.678.008L19.5 5.25m0 0-.008 3.677"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystResize12TwoTone;
