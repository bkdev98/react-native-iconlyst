import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopyrightInfringementBold = ({
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
      d="M4.773 5.834A9.46 9.46 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.46 9.46 0 0 0 6.166-2.273l-3.375-3.376a4.751 4.751 0 0 1-6.636-6.635zM5.834 4.773l3.383 3.384a4.75 4.75 0 0 1 6.142.491.75.75 0 1 1-1.06 1.06 3.25 3.25 0 0 0-4.001-.47l8.929 8.928A9.46 9.46 0 0 0 21.5 12 9.5 9.5 0 0 0 12 2.5a9.46 9.46 0 0 0-6.166 2.273"
    />
    <Path fill={props.color} d="M9.236 10.296a3.251 3.251 0 0 0 4.474 4.475z" />
  </Svg>
);
export default IconlystCopyrightInfringementBold;
