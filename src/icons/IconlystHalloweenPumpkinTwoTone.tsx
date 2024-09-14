import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalloweenPumpkinTwoTone = ({
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
      d="M6.044 18.832c1.218 1.354 2.968 1.997 4.751 1.5a3.35 3.35 0 0 0 1.7.449c.625 0 1.212-.156 1.72-.449 1.783.497 3.533-.146 4.751-1.5 1.374-1.54 2.222-3.596 2.466-5.634.233-1.929-.088-4.307-1.648-5.652a3.71 3.71 0 0 0-4.082-.477c-.206.108-.459.244-.604.439a3.14 3.14 0 0 0-2.593-1.345 3.2 3.2 0 0 0-2.602 1.335c-.146-.185-.39-.321-.595-.43a3.72 3.72 0 0 0-4.092.478c-1.56 1.345-1.882 3.723-1.647 5.652.253 2.038 1.101 4.094 2.475 5.634"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.429 6.163c-.058-2.437 2.017-2.944 2.017-2.944M9.508 15.15l1.376 1.086L12.5 15.16l1.617 1.076 1.375-1.085M9.86 11.674l-1.323-.447M15.14 11.674l1.324-.447"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHalloweenPumpkinTwoTone;
