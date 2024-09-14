import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarEngineEnergyTwoTone = ({
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
      d="M12.149 4.021v3.034m-2.022-3.034h4.044M3.25 10.21v6.067m2.831-3.034H3.25"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.794 10.889-1.74-3.3a1 1 0 0 0-.885-.534h-3.66a1 1 0 0 0-.668.255L8.388 8.611a1 1 0 0 1-.667.255h-.64a1 1 0 0 0-1 1v6.079a1 1 0 0 0 1 1h.505a1 1 0 0 1 .816.423l1.546 2.188a1 1 0 0 0 .816.422h4.245a1 1 0 0 0 1-1v-2.033"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.254 15.837 1.412-2.592h-3.497l1.412-2.596M16.794 10.888h1.422V9.865a1 1 0 0 1 1-1h1.034a1 1 0 0 1 1 1v8.102a1 1 0 0 1-1 1h-1.034a1 1 0 0 1-1-1v-1.023h-2.207"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCarEngineEnergyTwoTone;
