import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSnowyLight = ({
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
      d="M18.414 14.778c0-2.17-1.533-3.444-3.43-3.461 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.67-3.164 1.514l-.322.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.362 15.762a2.12 2.12 0 0 1-1.248-1.933c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51M9.327 7.336a2.257 2.257 0 0 0-4.504-.218M3.114 8.24a1.184 1.184 0 0 1 2.295-.41M12.201 7.244a4.364 4.364 0 0 1 3.984-3.922c-1.292 3.49 1.293 6.048 4.707 4.703A4.365 4.365 0 0 1 17.087 12M7.404 15.647l.008-.038m-.008 2.918.008-.039m3.344-1.439.008.038m-.008 2.88.008-.038m3.343-4.32.008.037m-.008 2.881.008-.039"
    />
  </Svg>
);
export default IconlystMoonSnowyLight;
