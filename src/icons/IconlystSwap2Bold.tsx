import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap2Bold = ({
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
      d="M14.998 17.005a5.01 5.01 0 0 1-4.9-4h3.986l-1.293 1.293a.999.999 0 1 0 1.414 1.414l2.999-3a1 1 0 0 0 0-1.415l-3-3a.999.999 0 1 0-1.413 1.415l1.293 1.293h-3.985a5.01 5.01 0 0 1 4.899-4c2.757 0 5 2.243 5 5s-2.243 5-5 5m-8.505-.666a5.01 5.01 0 0 1-2.505-4.334c0-1.783.96-3.444 2.505-4.334 1.054-.607 2.316-.782 3.497-.547a7 7 0 0 0-1.912 3.88h-2.08a1 1 0 1 0 0 2h2.08a6.98 6.98 0 0 0 1.912 3.88c-1.181.236-2.443.06-3.497-.545m8.505-11.334a6.94 6.94 0 0 0-3.011.69 7 7 0 0 0-6.492.244 7.02 7.02 0 0 0-3.507 6.066 6.994 6.994 0 0 0 7.001 6.998 7 7 0 0 0 2.997-.69 6.95 6.95 0 0 0 3.012.692c3.86 0 7-3.141 7-7s-3.14-7-7-7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwap2Bold;
