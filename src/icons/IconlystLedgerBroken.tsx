import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLedgerBroken = ({
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
      d="M18.5 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h7.235M3.5 9h3.212M15.5 15v6M3.5 15h15M9.5 3v15.496"
    />
  </Svg>
);
export default IconlystLedgerBroken;
