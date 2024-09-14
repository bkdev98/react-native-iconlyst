import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruck1Bold = ({
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
      d="M18.92 16.43h-.17a2.66 2.66 0 0 0-1.81-1.8V9.15l2.35 1.04c.58.25.96.83.96 1.47h-1.66a.749.749 0 1 0 0 1.5h1.66v1.94c0 .74-.6 1.33-1.33 1.33m-3.85 1.05a1.153 1.153 0 0 1 .37-1.18c.2-.18.46-.28.75-.28s.55.1.75.27c.26.21.42.53.42.89a1.165 1.165 0 0 1-2.29.3m-9.19-.28v-.02a1.17 1.17 0 0 1 2.338-.01q-.002.007-.003.014.002.007.003.014.002.036-.008.072a1.16 1.16 0 0 1-1.16 1.08c-.63 0-1.16-.51-1.17-1.15m14.01-8.38-2.95-1.31v-.53c0-1.56-1.27-2.83-2.83-2.83H5.04a2.8 2.8 0 0 0-2.79 2.8v8.15c0 1.35.95 2.48 2.22 2.76a2.665 2.665 0 0 0 5.138.074h4.034a2.654 2.654 0 0 0 2.548 1.916c1.21 0 2.24-.81 2.56-1.92h.17c1.56 0 2.83-1.27 2.83-2.83v-3.44c0-1.24-.73-2.36-1.86-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruck1Bold;
