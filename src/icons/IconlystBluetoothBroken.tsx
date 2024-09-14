import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothBroken = ({
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
      d="M6.074 11.99V12m.03-.128a.143.143 0 1 1-.002.287.143.143 0 0 1 .001-.287M18.869 11.99V12m.029-.128a.143.143 0 1 1-.001.287.143.143 0 0 1 0-.287M12.295 12V3l5.621 4.496zm0 0-4.688 3.745M12.295 12v5.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.607 8.246 10.31 8.25L12.294 21"
    />
  </Svg>
);
export default IconlystBluetoothBroken;
