import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPickupVanBroken = ({
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
      d="M9.239 16.451a2.6 2.6 0 0 1-.07.56 2.06 2.06 0 0 1-4 0 2.1 2.1 0 0 1-.08-.56 2.06 2.06 0 1 1 4.11 0zM19.35 16.451q.002.286-.07.56a2.06 2.06 0 0 1-2 1.491 2 2 0 0 1-2-1.49 2.05 2.05 0 1 1 4.02-.56zM18.48 10.382l-2.33-4.3a1.24 1.24 0 0 0-1.1-.66h-2.58a.8.8 0 0 0-.8.8v1.835"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.37 16.812h.35a2.29 2.29 0 0 0 2.28-2.29v-1.77a2.29 2.29 0 0 0-2.28-2.29H8.97M5.08 16.812h-.79A2.3 2.3 0 0 1 2 14.522v-4.06h3.935M9.25 16.371h6M12.012 12.781h1.14"
    />
  </Svg>
);
export default IconlystPickupVanBroken;
