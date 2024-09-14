import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowMoonOutline = ({
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
      fillRule="evenodd"
      d="M7.89 20.312a4.723 4.723 0 0 1 9.447 0 .75.75 0 1 1-1.5 0 3.223 3.223 0 0 0-6.446 0 .75.75 0 1 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.404 20.312a7.21 7.21 0 0 1 14.421 0 .75.75 0 1 1-1.5 0 5.71 5.71 0 0 0-11.42 0 .75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 20.313c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0 8.25 8.25 0 0 0-16.5 0 .75.75 0 0 1-1.5 0M18.91 2.277a4.262 4.262 0 0 0 1.175 8.358 4.266 4.266 0 0 0 4.096-3.091c.173-.603-.361-1.06-.875-.973-1.216.141-2.146-.213-2.724-.797-.582-.588-.891-1.493-.7-2.619.085-.508-.356-1.057-.973-.878m.41 1.442h.003l.001-.001zm-.976.509a2.762 2.762 0 0 0 1.74 4.907c.88 0 1.666-.414 2.172-1.059-1.09-.105-2.04-.539-2.741-1.248-.678-.686-1.082-1.588-1.17-2.6M22.74 7.13l-.001.001zM11.114 4.19a.75.75 0 0 0-.717.532c-.146.48-.521.855-1.001 1a.75.75 0 0 0 0 1.436c.48.146.855.521 1 1a.75.75 0 0 0 1.436 0c.146-.479.521-.854 1-1a.75.75 0 0 0 0-1.435 1.5 1.5 0 0 1-1-1 .75.75 0 0 0-.718-.533m.065 2.25-.065.065-.065-.065q.033-.03.065-.064z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowMoonOutline;
