import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteBold = ({
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
      d="M3.358 20.879c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l16.7-16.698a.75.75 0 0 0 0-1.061.75.75 0 0 0-1.062 0l-3.728 3.728-.004-.062c-.08-1.265-.808-2.402-1.903-2.966-1.034-.531-2.197-.481-3.192.14L8.084 5.923c-.266.169-.67.278-1.062.279-.327.023-.609.034-.858.043l-.072.003c-.94.032-1.562.053-2.371.727-1.067.89-1.061 2.897-1.056 4.509v.583c-.004 1.63-.01 3.658 1.058 4.558.74.608 1.316.683 2.113.716L3.358 19.82a.75.75 0 0 0 0 1.06M12.944 20.142a3.2 3.2 0 0 1-1.716-.506l-1.094-.677a.5.5 0 0 1-.09-.779l5.593-5.593a.5.5 0 0 1 .853.361 78 78 0 0 1-.167 3.865 3.54 3.54 0 0 1-1.882 2.953c-.48.251-.99.376-1.497.376"
    />
  </Svg>
);
export default IconlystVolumeMuteBold;
