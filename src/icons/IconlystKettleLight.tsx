import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettleLight = ({
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
      d="m7.002 18.025-3.518-5.542 1.61-.751L7.67 14.34m7.314-5.237a1.224 1.224 0 1 0-2.447 0 1.224 1.224 0 0 0 2.447 0m5.409 8.786c.19-2.614-.73-5.05-2.996-6.501-2.926-1.872-6.74-1.131-8.863 1.562-.946 1.199-1.508 2.699-1.506 4.231.001.816.169 1.626.277 2.432.106.797.79 1.39 1.594 1.386l9.722-.067c.951-.007 1.457-.724 1.594-1.581.077-.478.142-.968.178-1.462M8.215 13.367H19.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.33 13.26.18-.283a6.37 6.37 0 0 0 1.006-3.464A6.515 6.515 0 0 0 14.003 3 6.515 6.515 0 0 0 7.49 9.513c0 1.125.284 2.174.777 3.103l.23.355"
    />
  </Svg>
);
export default IconlystKettleLight;
