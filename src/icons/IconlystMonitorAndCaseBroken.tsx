import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndCaseBroken = ({
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
      d="m21.5 11.999-.001-4.554a2.476 2.476 0 0 0-2.476-2.476h-2.5a2.477 2.477 0 0 0-2.478 2.477v9.107a2.477 2.477 0 0 0 2.477 2.477h2.502a2.476 2.476 0 0 0 2.476-2.477v-.99M11.183 16.035H5.605A2.105 2.105 0 0 1 3.5 13.93v-3.088M3.5 7.753c0-1.163.943-2.105 2.105-2.105h5.578M6.664 18.793h4.519M17.773 16.256v.07M16.5 9.375h2.545M16.5 11.875h2.545"
    />
  </Svg>
);
export default IconlystMonitorAndCaseBroken;
