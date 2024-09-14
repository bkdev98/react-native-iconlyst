import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinRightLight = ({
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
      d="M12 10.2v.01M17.4 15.6c2.186-.82 3.6-2.128 3.6-3.6 0-2.015-2.648-3.72-6.3-4.294M12 16.5c-4.97 0-9-2.015-9-4.5 0-2.015 2.649-3.72 6.3-4.294"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9.3 13.8 2.699 2.699q0 0 0 0v.001q0 0 0 0l-2.7 2.7M12 4.8v.01M12 7.5v.01"
    />
  </Svg>
);
export default IconlystSpinRightLight;
