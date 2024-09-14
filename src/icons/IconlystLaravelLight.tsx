import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLaravelLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.313 12.948V8.844m0 4.104-3.541-2.05-7.084 4.105m10.625-2.055-7.083 4.106m7.083-8.21 3.383-1.96m-3.383 1.96-3.386-1.96m-7.24 8.119 3.543 2.05m-3.542-2.05v-8.06m3.542 10.11v3.934M6.688 6.943l3.386-1.961m-3.386 1.96L3.298 4.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.772 10.898V7.381c0-.363.193-.698.507-.88l2.525-1.464a1.02 1.02 0 0 1 1.02 0l2.523 1.461c.315.182.508.518.508.88v2.932c0 .363-.193.698-.507.88l-2.528 1.465a1.02 1.02 0 0 0-.507.88v2.93c0 .364-.193.7-.507.881l-6.067 3.517a1.02 1.02 0 0 1-1.02 0l-6.067-3.512a1.02 1.02 0 0 1-.507-.88V5.478c0-.363.193-.698.507-.88l2.525-1.462a1.02 1.02 0 0 1 1.02 0l2.525 1.461c.314.182.508.518.508.881v7.472"
    />
  </Svg>
);
export default IconlystLaravelLight;
