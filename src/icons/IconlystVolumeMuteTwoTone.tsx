import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteTwoTone = ({
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
      d="m11.242 6.44 3.208-2.005c1.925-1.203 4.275.241 4.41 2.483a70 70 0 0 1 0 10.164c-.116 2.239-2.485 3.687-4.411 2.484l-3.207-2.005"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.242 6.44c-.373.233-.887.357-1.326.357-1.636.12-2.173-.072-3.073.677-.961.804-.888 2.951-.888 4.525 0 1.576-.07 3.723.888 4.527.907.747 1.435.554 3.079.677.44 0 .947.124 1.32.358"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVolumeMuteTwoTone;
