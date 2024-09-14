import * as React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUndrinkableWaterTwoTone = ({
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
    <Circle
      cx={12.114}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.023 17.13q-.452.11-.908.107c-1.981.024-4.042-1.706-4-3.798v-.005a5.3 5.3 0 0 1 .174-1.422"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M9.551 9.42c1.147-1.612 2.564-2.657 2.564-2.657s4.06 2.995 3.998 6.671v.004c.015.706-.21 1.37-.59 1.94M5.78 5.665l12.67 12.67" />
    </G>
  </Svg>
);
export default IconlystUndrinkableWaterTwoTone;
