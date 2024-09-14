import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinLeftLight = ({
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
      strokeWidth={1.5}
      d="M12 10.2v.01M6.6 15.6C4.414 14.78 3 13.472 3 12c0-2.015 2.648-3.72 6.3-4.294M12 16.5c4.97 0 9-2.015 9-4.5 0-2.015-2.649-3.72-6.3-4.294"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.7 13.8-2.698 2.699q0 0 0 0v.001q0 0 0 0l2.699 2.7M12 4.8v.01M12 7.5v.01"
    />
  </Svg>
);
export default IconlystSpinLeftLight;
