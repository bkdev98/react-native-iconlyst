import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleepingBulk = ({
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
      d="M16.849 10.606c-.325-.733-.152-1.472.294-2.073a.375.375 0 0 0-.014-.452 2 2 0 0 1-.264-.438.33.33 0 0 0-.295-.202h-1.409a2 2 0 0 1-1.785-2.902.37.37 0 0 0 0-.33 2 2 0 0 1-.196-.68c-.017-.169-.15-.31-.32-.31H7.95c-3.035 0-5.075 2.133-5.075 5.309v7.602c0 3.175 2.04 5.309 5.075 5.309h8.068c3.038 0 5.078-2.134 5.078-5.31v-4.033a.3.3 0 0 0-.3-.3h-2.118a2 2 0 0 1-1.829-1.19"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.16 4.059h.243l-.798.88a.752.752 0 0 0 .556 1.254h1.935a.75.75 0 0 0 0-1.5h-.243l.798-.88a.752.752 0 0 0-.555-1.254H15.16a.75.75 0 0 0 0 1.5M20.37 9.048h1.005a.75.75 0 0 1 0 1.5h-2.697a.75.75 0 0 1-.556-1.253l1.56-1.723h-1.004a.75.75 0 0 1 0-1.5h2.697a.751.751 0 0 1 .556 1.254zM6.586 10.305a.75.75 0 1 1 1.189-.913c.074.096.234.257.474.257s.399-.16.474-.257a.749.749 0 1 1 1.189.913 2.1 2.1 0 0 1-1.663.844 2.1 2.1 0 0 1-1.663-.844M15.285 10.305a2.1 2.1 0 0 1-1.663.844 2.1 2.1 0 0 1-1.663-.844.749.749 0 1 1 1.189-.913c.074.096.234.257.474.257s.399-.16.474-.257a.749.749 0 1 1 1.189.913"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.409 15.797a2.477 2.477 0 0 1-2.475 2.473 2.476 2.476 0 0 1-2.472-2.473v-.733a2.475 2.475 0 0 1 2.472-2.473 2.476 2.476 0 0 1 2.475 2.473zm-2.475-1.706a.975.975 0 0 0-.973.973v.733a.974.974 0 0 0 1.948 0v-.733a.976.976 0 0 0-.975-.973"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSleepingBulk;
