import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPortisBulk = ({
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
      fill={props.color}
      d="M13.5 6.73v1.605l1.229.526 1.666 2.889-2.895-1.24v2.866l2.974-1.488.364.63c.213.373.377.77.488 1.18l-3.79 1.896A5 5 0 0 0 15.506 19a5 5 0 0 1-1.998.902 7 7 0 0 1-1.008-1.3c-.285.473-.623.91-1.008 1.3A5 5 0 0 1 9.494 19a5 5 0 0 0 1.97-3.405l-3.79-1.896c.11-.41.274-.807.488-1.18v-.001l.363-.629 2.975 1.487V10.51l-2.894 1.24 1.665-2.89 1.229-.525V6.73l1-1.734z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 1.994a1 1 0 0 1 .866.5l5.207 9.029a7 7 0 1 1-12.145 0v-.002l5.206-9.026a1 1 0 0 1 .866-.5m0 3.002-4.337 7.522h-.001a5 5 0 1 0 8.676 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPortisBulk;
