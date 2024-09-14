import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterElectricTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.466 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432M19.034 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.571 4.821H9.986c-.512 0-.975.345-1.113.837l-1.925 6.795a5.195 5.195 0 0 1 3.355 4.86l5.02.02c.412 0 .815-.087 1.189-.24l.307-.125"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.717 13.345 1.452-2.667H11.57l1.453-2.671"
    />
  </Svg>
);
export default IconlystScooterElectricTwoTone;
