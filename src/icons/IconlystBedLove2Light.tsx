import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 18.032c0-.849 0-1.273.085-1.623a3 3 0 0 1 2.205-2.205c.35-.085.774-.085 1.623-.085h10.174c.849 0 1.273 0 1.623.085a3 3 0 0 1 2.205 2.205c.085.35.085.774.085 1.623 0 .453 0 .68-.046.866a1.6 1.6 0 0 1-1.175 1.176c-.187.045-.413.045-.866.045H5.087c-.453 0-.68 0-.866-.045a1.6 1.6 0 0 1-1.176-1.176C3 18.711 3 18.485 3 18.032M5.215 14.119V4.881M18.788 4.88v9.239"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.516 6.263c.297-.928-.048-1.991-1.019-2.304-.251-.08-.518-.1-.778-.055-.26.044-.506.224-.717.382-.212-.157-.458-.336-.718-.38a1.7 1.7 0 0 0-.777.053c-.971.316-1.32 1.376-1.022 2.304.458 1.47 2.517 2.431 2.517 2.431s2.027-.944 2.514-2.431"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.506 6.35c-.606.081-2.311.409-4.291 1.065M14.498 6.35c.605.081 2.311.409 4.291 1.065M12.003 14.12v-.8c0-.409 0-.614-.06-.778a1 1 0 0 0-.602-.602c-.164-.06-.369-.06-.778-.06H8.776c-.41 0-.615 0-.779.06a1 1 0 0 0-.602.602c-.06.164-.06.37-.06.779v.798"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.669 14.12v-.8c0-.409 0-.614-.06-.778a1 1 0 0 0-.602-.602c-.164-.06-.369-.06-.778-.06h-1.787c-.41 0-.615 0-.779.06a1 1 0 0 0-.602.602c-.059.164-.059.37-.059.779v.798"
    />
  </Svg>
);
export default IconlystBedLove2Light;
