import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLycheeTwoTone = ({
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
      d="M11.259 19.115c0 .32.258.578.577.578.867-.002 1.112 1.356 1.855 1.047.33-.137.701-.34 1.008-.032.726.728 1.496-.345 2.403.032a.577.577 0 0 0 .755-.313c.33-.8 1.679-.507 1.678-1.312-.002-.867 1.356-1.111 1.047-1.855-.333-.8.828-1.546.258-2.114H9.953c-.568.566.59 1.315.258 2.114-.309.743 1.049.988 1.048 1.855M20.316 15.132c0-3.1-2.254-5.614-4.92-5.614s-4.92 2.513-4.92 5.614"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m10.755 18.894-.319.289a.97.97 0 0 1-1.305 0l-.318-.289a.97.97 0 0 0-.928-.212l-.413.122a.97.97 0 0 1-1.175-.566l-.162-.398a.97.97 0 0 0-.744-.594l-.424-.069a.97.97 0 0 1-.814-1.02l.027-.429a.97.97 0 0 0-.413-.857l-.352-.247a.97.97 0 0 1-.29-1.272l.21-.375a.97.97 0 0 0 0-.952l-.21-.374a.97.97 0 0 1 .29-1.272l.352-.247a.97.97 0 0 0 .413-.857l-.027-.43a.97.97 0 0 1 .814-1.02l.424-.069a.97.97 0 0 0 .744-.593l.162-.398a.97.97 0 0 1 1.175-.567l.413.122a.97.97 0 0 0 .928-.211l.318-.29a.97.97 0 0 1 1.305 0l.319.29a.97.97 0 0 0 .927.211l.413-.122a.97.97 0 0 1 1.175.567l.162.398c.128.314.41.539.744.593l.425.07c.493.08.844.521.813 1.02l-.027.429" />
      <Path d="M9.384 5.302c3.123 1.59 4.245-.263 4.669-1.874-2.431-1.05-3.683.128-4.669 1.874M9.34 5.568c.052-.38-.316-1.704-1.594-2.32" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.955 10.322A.968.968 0 0 1 7.28 9.68M6.195 13.792a.968.968 0 0 0 1.675-.641"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.886 18.024a.968.968 0 0 0 1.675-.642"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLycheeTwoTone;
