import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothDisconnectedBulk = ({
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
      d="M12.59 18.741V14.34l2.446 2.447zm8.78 1.552-8.986-8.989q-.006-.01-.01-.019c-.012-.014-.029-.017-.04-.03l-8.29-8.292a.999.999 0 1 0-1.415 1.414l7.456 7.457-3.84 3.074a1 1 0 1 0 1.25 1.562l3.095-2.477v6.827a1.001 1.001 0 0 0 1.624.781l4.245-3.392 3.497 3.498a.999.999 0 1 0 1.414-1.414"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.59 7.72a1 1 0 0 0 1-1V5.079l2.968 2.372L13.85 8.82a1 1 0 0 0-.155 1.405.995.995 0 0 0 1.405.155l2.683-2.149a.998.998 0 0 0-.001-1.562l-5.567-4.45A1 1 0 0 0 10.59 3v3.72a1 1 0 0 0 1 1"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBluetoothDisconnectedBulk;
