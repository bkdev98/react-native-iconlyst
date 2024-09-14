import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerButtonBold = ({
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
      fillRule="evenodd"
      d="M12 16.997a4.89 4.89 0 0 1-4.886-4.886c0-1.477.66-2.861 1.811-3.797a.75.75 0 1 1 .946 1.164 3.38 3.38 0 0 0-1.257 2.633A3.39 3.39 0 0 0 12 15.497a3.39 3.39 0 0 0 3.386-3.386 3.38 3.38 0 0 0-1.257-2.634.75.75 0 0 1 .948-1.163 4.88 4.88 0 0 1 1.809 3.797A4.89 4.89 0 0 1 12 16.997m-.75-9.245a.75.75 0 0 1 1.5 0v3.604a.75.75 0 0 1-1.5 0zM16.218 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.026c0-3.305-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerButtonBold;
