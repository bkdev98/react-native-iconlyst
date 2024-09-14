import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh4Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.023 4.313.008.042m3.84 1.517.008.007m2.531 3.267.007.007m.564 4.09.008.008m-1.566 3.84.007.007M8.808 4.953a8.014 8.014 0 0 0-4.205 10.358M6.334 17.934c2.213 2.232 5.632 3.043 8.718 1.783"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.14 4.613 4.674.064-.063 4.648"
    />
  </Svg>
);
export default IconlystRefresh4Broken;
