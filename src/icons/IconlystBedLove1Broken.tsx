import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove1Broken = ({
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
      d="M10.215 6.569c-.606.082-2.311.41-4.291 1.065M15.207 6.569c.605.082 2.311.41 4.291 1.065M12.709 18.378h6.913c.452 0 .679 0 .866-.046a1.6 1.6 0 0 0 1.175-1.175c.046-.187.046-.413.046-.866 0-.849 0-1.273-.086-1.623a3 3 0 0 0-2.204-2.205c-.35-.085-.774-.085-1.623-.085H7.622c-.849 0-1.274 0-1.624.085a3 3 0 0 0-2.204 2.205c-.085.35-.085.774-.085 1.623 0 .452 0 .68.045.866a1.6 1.6 0 0 0 1.176 1.175c.187.046.413.046.866.046h3.457M19.498 19.901V18.38M5.924 19.901V18.38M19.498 5.062v7.317M5.924 5.062v7.317"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.227 6.481c.297-.927-.048-1.99-1.02-2.303-.25-.08-.517-.1-.777-.055-.26.043-.506.223-.717.382-.212-.157-.458-.336-.717-.38a1.7 1.7 0 0 0-.779.053c-.97.316-1.319 1.376-1.021 2.303.458 1.47 2.517 2.432 2.517 2.432s2.027-.944 2.514-2.432"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedLove1Broken;
