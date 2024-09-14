import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalloweenPumpkinBroken = ({
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
      d="M3.569 13.199c-.235-1.93.087-4.308 1.647-5.653a3.72 3.72 0 0 1 4.092-.477c.205.108.449.244.595.429a3.2 3.2 0 0 1 2.602-1.335c1.072 0 2.027.526 2.593 1.345.145-.195.398-.331.604-.44a3.71 3.71 0 0 1 4.082.478c1.56 1.345 1.881 3.723 1.648 5.652-.244 2.038-1.092 4.094-2.466 5.634-1.218 1.354-2.968 1.997-4.752 1.5a3.4 3.4 0 0 1-1.718.449 3.35 3.35 0 0 1-1.701-.449c-1.783.497-3.533-.146-4.751-1.5a9.7 9.7 0 0 1-1.541-2.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.429 6.163c-.058-2.437 2.017-2.944 2.017-2.944M9.508 15.15l1.376 1.086L12.5 15.16l1.617 1.076 1.375-1.085M9.86 11.674l-1.323-.447M15.14 11.674l1.324-.447"
    />
  </Svg>
);
export default IconlystHalloweenPumpkinBroken;
