import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoosterRightTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Circle cx={11.607} cy={6.007} r={2.263} />
      <Path d="M11.606 20.256v-6.66M11.606 8.27v2.746" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.055 13.536H5.04M18.043 10.524l3.012 3.012-3.012 3.012M3.055 11.551l1.985 1.985-1.985 1.985"
    />
  </Svg>
);
export default IconlystRoosterRightTwoTone;
