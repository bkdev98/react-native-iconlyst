import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCheckBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.045 15.778a612 612 0 0 0 9.939-4.106c1.328-.562 2.553-1.892 2.105-3.482-.19-.681-.603-1.203-1.195-1.51-1.138-.59-2.513-.207-3.056-.013-.946.343-1.876.747-2.775 1.138l-.273.119-.044.016-.01-.009C12.543 6.821 11.27 5.71 10.25 4.82c-.795-.702-1.62-.96-2.466-.768-.456.109-.887.274-1.303.436q-.27.106-.55.207a.75.75 0 0 0-.441.992l1.995 4.834-1.64.697c-.651.277-1.307.557-1.861.791l-.102-.247-.19-.46a.75.75 0 1 0-1.384.58l.187.451c.13.316.282.683.337.813l.048.112.01.023.03.064c.865 1.877 2.298 2.87 4.032 2.87.659 0 1.362-.143 2.093-.436M12.274 19.501h-7.38a.75.75 0 0 0 0 1.5h7.38a.75.75 0 0 0 0-1.5M21.53 15.8a.75.75 0 0 0-1.06 0l-3.268 3.27-1.314-1.318a.75.75 0 1 0-1.063 1.058l1.845 1.85a.75.75 0 0 0 1.061 0l3.8-3.798a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneCheckBold;
