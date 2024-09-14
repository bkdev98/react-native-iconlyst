import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove2Broken = ({
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
      d="M10.31 6.35c-.605.081-2.31.409-4.29 1.065M15.303 6.35c.605.081 2.31.409 4.29 1.065M12.807 14.12v-.8c0-.409 0-.614-.059-.778a1 1 0 0 0-.602-.602c-.164-.06-.369-.06-.779-.06H9.581c-.41 0-.615 0-.78.06a1 1 0 0 0-.601.602c-.06.164-.06.37-.06.779v.798"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.473 14.12v-.8c0-.409 0-.614-.059-.778a1 1 0 0 0-.602-.602c-.164-.06-.369-.06-.779-.06h-1.786c-.41 0-.615 0-.78.06a1 1 0 0 0-.601.602c-.06.164-.06.37-.06.779v.798"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.808 20.12H5.895c-.452 0-.68 0-.866-.046a1.6 1.6 0 0 1-1.175-1.176c-.046-.187-.046-.413-.046-.866 0-.849 0-1.273.086-1.623a3 3 0 0 1 2.204-2.205c.35-.085.774-.085 1.623-.085h10.174c.849 0 1.274 0 1.624.085a3 3 0 0 1 2.204 2.205c.085.35.085.774.085 1.623 0 .453 0 .68-.045.866a1.6 1.6 0 0 1-1.176 1.176c-.187.045-.413.045-.866.045h-3.457M19.594 4.88v9.24M6.02 4.88v9.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.322 6.263c.297-.928-.048-1.991-1.02-2.304-.25-.08-.518-.1-.777-.055-.26.044-.506.224-.718.382-.211-.157-.457-.336-.717-.38a1.7 1.7 0 0 0-.778.053c-.97.316-1.319 1.376-1.022 2.304.46 1.47 2.517 2.431 2.517 2.431s2.028-.944 2.515-2.431"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedLove2Broken;
