import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoElectricScooterLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.025 5.478h1.928a1 1 0 0 1 .971.763L18.432 16.5M5.274 13.757c2.49 0 4.51 1.995 4.51 4.486h3.573"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.8 13.981-.48.198a4.54 4.54 0 0 0-1.973 1.772M5.23 20.292a1.98 1.98 0 1 0 0-3.962 1.98 1.98 0 0 0 0 3.962M17.322 17.945a1.981 1.981 0 1 1 2.322 2.311M3.562 4.197 15.997 16.63l1.446 1.447 2.23 2.23 1.577 1.577"
    />
  </Svg>
);
export default IconlystNoElectricScooterLight;
