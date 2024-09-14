import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeaSunnyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.055 3v1.372m9 7.628h-1.372M4.427 12H3.055m15.364-6.364-.97.97m-10.788 0-.97-.97M15.398 15.882a5.103 5.103 0 1 0-6.736-.041"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.055 16.396a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0M3.055 20.5a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0"
    />
  </Svg>
);
export default IconlystSeaSunnyLight;
