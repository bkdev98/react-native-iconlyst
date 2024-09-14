import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShipLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.993 8.678v12.336M6.837 9.905V6.532a1 1 0 0 1 1-1h8.31a1 1 0 0 1 1 1v3.373"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.827 12.68-.92 4.51a4 4 0 0 1-3.066 3.108l-3.987.87a4 4 0 0 1-1.708 0l-3.987-.87a4 4 0 0 1-3.066-3.109l-.92-4.509a1 1 0 0 1 .628-1.135l7.494-2.825a2 2 0 0 1 1.41 0l7.495 2.825a1 1 0 0 1 .627 1.135M13.84 5.532V4.235a1 1 0 0 0-1-1h-1.685a1 1 0 0 0-1 1v1.297"
    />
  </Svg>
);
export default IconlystShipLight;
