import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeHighBold = ({
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
      d="M9.675 19.317a3.03 3.03 0 0 0 1.611.475c.476 0 .953-.117 1.404-.351a3.34 3.34 0 0 0 1.77-2.775 65 65 0 0 0 0-9.326c-.074-1.19-.759-2.257-1.789-2.788-.97-.5-2.062-.452-2.996.13L6.751 6.51c-.249.157-.63.22-.978.25a21 21 0 0 1-.864.044c-.876.032-1.456.053-2.22.688-.998.834-.993 2.71-.989 4.218l.001.29v.278c-.005 1.51-.01 3.393.991 4.232.768.632 1.344.653 2.218.685.247.008.531.019.905.046.327 0 .694.098.937.25zM17.272 16.324a.75.75 0 0 1-.65-1.124 6.44 6.44 0 0 0 0-6.401.75.75 0 0 1 1.301-.747 7.95 7.95 0 0 1 0 7.896.75.75 0 0 1-.651.376"
    />
    <Path
      fill={props.color}
      d="M19.27 18.528a.75.75 0 0 0 1.045-.186 11.12 11.12 0 0 0 0-12.682.75.75 0 1 0-1.231.858 9.62 9.62 0 0 1 0 10.966.75.75 0 0 0 .187 1.044"
    />
  </Svg>
);
export default IconlystVolumeHighBold;
