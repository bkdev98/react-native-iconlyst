import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCheckBulk = ({
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
      d="M12.274 19.63h-7.38a.75.75 0 0 0 0 1.5h7.38a.75.75 0 0 0 0-1.5M21.53 15.93a.75.75 0 0 0-1.06 0l-3.268 3.27-1.314-1.318a.75.75 0 1 0-1.063 1.058l1.845 1.85a.75.75 0 0 0 1.061 0l3.8-3.798a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.045 15.908a612 612 0 0 0 9.939-4.105c1.328-.562 2.553-1.892 2.105-3.483-.19-.681-.603-1.203-1.195-1.51-1.138-.59-2.513-.207-3.056-.013-.946.343-1.876.747-2.775 1.138l-.273.119-.044.017-.009-.01c-1.195-1.11-2.468-2.221-3.487-3.111-.795-.703-1.62-.961-2.466-.77-.456.11-.887.276-1.303.438q-.27.106-.55.207a.75.75 0 0 0-.441.992l1.995 4.833-1.64.697c-.651.278-1.307.558-1.861.792l-.102-.248-.19-.46a.75.75 0 1 0-1.384.58l.187.452c.13.315.282.683.337.812l.048.112.01.023.03.064c.865 1.877 2.298 2.87 4.032 2.87.659 0 1.362-.143 2.093-.436"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneCheckBulk;
