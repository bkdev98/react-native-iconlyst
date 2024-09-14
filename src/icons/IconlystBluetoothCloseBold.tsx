import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothCloseBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m10.605 14.086 3.02 2.414-3.02 2.417zm5.589 2.22a1 1 0 0 0-.053-.168 1 1 0 0 0-.097-.188c-.016-.024-.02-.052-.04-.075-.022-.03-.055-.044-.081-.07s-.042-.062-.073-.087l-4.618-3.692 1.297-.978c.44-.333.528-.96.196-1.401a1 1 0 0 0-1.401-.196l-.72.542V5.02l.79.604a1 1 0 0 0 1.214-1.59l-2.397-1.83A1 1 0 0 0 8.605 3v6.926L5.543 7.478a1.004 1.004 0 0 0-1.407.156 1.003 1.003 0 0 0 .157 1.407l3.712 2.967-3.712 2.96a1.002 1.002 0 0 0 1.249 1.563l3.063-2.444V21a1 1 0 0 0 1.625.78l5.62-4.5c.033-.027.05-.065.079-.094.024-.025.057-.035.078-.062s.025-.056.043-.083a1 1 0 0 0 .087-.17 1 1 0 0 0 .059-.188 1 1 0 0 0 .014-.177 1 1 0 0 0-.016-.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.567 7.53 1.223-1.225a1 1 0 0 0-1.414-1.414l-1.222 1.223-1.223-1.223a1 1 0 0 0-1.414 1.414L15.74 7.53l-1.223 1.223a1 1 0 0 0 1.414 1.414l1.223-1.223 1.222 1.223a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothCloseBold;
