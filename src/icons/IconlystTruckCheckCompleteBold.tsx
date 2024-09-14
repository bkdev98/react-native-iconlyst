import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckCheckCompleteBold = ({
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
      d="M20.25 11.664h-1.651a.75.75 0 0 0 0 1.5h1.651V15.1c0 .74-.59 1.33-1.33 1.33h-.16a2.66 2.66 0 0 0-1.81-1.8V9.16l2.34 1.03c.59.25.96.83.96 1.47zm-2.88 5.466c-.01.02-.01.03-.01.05s0 .03.01.05v.01c-.04.63-.55 1.11-1.17 1.11a1.16 1.16 0 0 1-1.169-1.165l-.001-.006c0-.36.16-.68.42-.89.2-.17.46-.27.75-.27.28 0 .55.1.75.28.24.2.4.48.42.82zm-5.542-7.276-2.795 2.8a.75.75 0 0 1-1.06 0l-1.482-1.48a.751.751 0 0 1 1.06-1.061l.951.95 2.264-2.27a.75.75 0 1 1 1.062 1.06M8.21 17.27c-.04.61-.54 1.08-1.16 1.08-.63 0-1.15-.51-1.16-1.15v-.02c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16 0 .03 0 .06-.01.09M19.9 8.82l-2.95-1.3v-.54c0-1.56-1.27-2.83-2.83-2.83H5.05c-1.54 0-2.8 1.26-2.8 2.8v8.15c0 1.35.96 2.49 2.23 2.76a2.661 2.661 0 0 0 5.128.074h4.033a2.668 2.668 0 0 0 5.119-.004h.16c1.56 0 2.83-1.27 2.83-2.83v-3.44c0-1.24-.73-2.36-1.85-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckCheckCompleteBold;
