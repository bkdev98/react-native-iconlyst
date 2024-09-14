import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElectricScooterLight = ({
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
      d="M13.025 5.478h1.928a1 1 0 0 1 .971.763L18.432 16.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.274 13.757c2.49 0 4.51 1.995 4.51 4.486h4.932c0-1.81 1.065-3.345 2.603-4.064l.481-.198M5.23 20.292a1.98 1.98 0 1 0 0-3.962 1.98 1.98 0 0 0 0 3.962M19.269 20.292a1.98 1.98 0 1 0 0-3.962 1.98 1.98 0 0 0 0 3.962"
    />
  </Svg>
);
export default IconlystElectricScooterLight;
