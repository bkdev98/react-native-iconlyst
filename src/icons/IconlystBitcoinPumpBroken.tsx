import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinPumpBroken = ({
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
      d="M19.715 10.904A7.904 7.904 0 0 0 11.812 3M7.392 17.457a7.9 7.9 0 0 1-3.484-6.554 7.89 7.89 0 0 1 2.88-6.102M18.34 14.529l2.137-.615.614 2.137"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.48 21 2.254-3.636 4.93 1.476 2.815-4.926M12.455 10.53h-1.892v2.709h1.95c.792 0 1.425-.68 1.348-1.488-.067-.705-.698-1.222-1.406-1.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.455 7.82h-1.892v2.71h1.95c.792 0 1.425-.68 1.348-1.488-.067-.705-.698-1.222-1.406-1.222M11.973 14.039v-.799M11.973 7.818V7.02"
    />
  </Svg>
);
export default IconlystBitcoinPumpBroken;
