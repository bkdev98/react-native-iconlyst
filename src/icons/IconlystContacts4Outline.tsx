import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts4Outline = ({
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
      d="M4.94 4.953c.918-.874 2.198-1.281 3.655-1.281h7.62c1.46 0 2.74.407 3.657 1.282.924.88 1.383 2.14 1.379 3.648v8.212c0 1.507-.462 2.77-1.385 3.651-.918.877-2.197 1.286-3.659 1.286H8.595c-1.462 0-2.743-.418-3.66-1.308-.923-.894-1.384-2.171-1.384-3.697V8.6c0-1.508.464-2.769 1.388-3.648M5.972 6.04c-.561.534-.922 1.363-.922 2.56v8.146c0 1.222.363 2.073.927 2.62.568.55 1.434.885 2.617.885h7.612c1.19 0 2.057-.33 2.623-.87.56-.536.92-1.368.92-2.567V8.599c.004-1.199-.354-2.027-.913-2.56-.564-.538-1.431-.867-2.622-.867h-7.62c-1.187 0-2.055.329-2.622.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.3 16.204c-.357.324-.495.73-.495 1.08a.75.75 0 0 1-1.5 0c0-.74.293-1.561.987-2.191.697-.631 1.73-1.011 3.108-1.011 1.377 0 2.41.376 3.107 1.005.695.627.989 1.446.989 2.188a.75.75 0 0 1-1.5 0c0-.35-.138-.753-.494-1.074-.355-.32-.995-.619-2.102-.619-1.105 0-1.745.3-2.1.622M12.4 9.066a1.387 1.387 0 1 0-.001 2.775 1.387 1.387 0 0 0 0-2.775m-2.888 1.387a2.887 2.887 0 1 1 5.774.001 2.887 2.887 0 0 1-5.774 0M8.768 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m7.271 0a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts4Outline;
