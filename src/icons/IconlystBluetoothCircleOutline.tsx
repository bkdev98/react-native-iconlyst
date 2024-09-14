import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12s-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12m9.426-4.948a.75.75 0 0 1 .793.09l2.67 2.136a.75.75 0 0 1 0 1.17L13.451 12l1.938 1.55a.75.75 0 0 1 0 1.172l-2.67 2.136a.75.75 0 0 1-1.218-.586V13.56l-1.452 1.162a.75.75 0 1 1-.938-1.171L11.05 12 9.11 10.449a.75.75 0 0 1 .938-1.171L11.5 10.44V7.728a.75.75 0 0 1 .425-.676M13 13.56l.72.575-.72.576zm0-3.122V9.288l.72.575z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothCircleOutline;
