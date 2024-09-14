import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.527 16.427a.75.75 0 0 1-.991-.377c-.285-.636-1.117-1.947-1.863-1.947-.414 0-1.18.924-1.688 1.534-.816.984-1.588 1.914-2.574 1.914-.921 0-1.563-.478-2.079-.862-.428-.318-.706-.513-1.017-.513-.535 0-1.123.823-1.324 1.222a.75.75 0 0 1-1.006.335.75.75 0 0 1-.336-1.003c.104-.211 1.065-2.054 2.666-2.054.824 0 1.427.448 1.912.81.471.35.781.565 1.184.565.284-.004 1.023-.894 1.42-1.372.848-1.021 1.724-2.076 2.842-2.076 1.914 0 3.104 2.545 3.233 2.835a.75.75 0 0 1-.379.989M8.831 7.651a2.06 2.06 0 0 1 2.058 2.058 2.06 2.06 0 0 1-2.058 2.058 2.06 2.06 0 0 1 0-4.116m3.419-4.797c-7.199 0-9.75 2.552-9.75 9.75s2.551 9.75 9.75 9.75S22 19.802 22 12.604s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageBoldcurved;
