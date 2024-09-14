import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarRentalLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.846 7.512-2.98-.001a2.301 2.301 0 1 1 0-2.646l2.75.02c.18 0 .42-.04.546.087l.95.95a.323.323 0 0 1 0 .458l-1.037 1.037a.32.32 0 0 1-.229.095M7.902 6.2h.011M16.61 7.59h2.063M16.264 4.661h1.377M14.901 17.514h1.351M8.228 17.514h1.35M5.483 14.44c4.48.621 9.027.621 13.507 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.485 21.149a.743.743 0 0 0 .751.736h1.49a.743.743 0 0 0 .75-.734v-.3c0-.406.337-.735.752-.735h6.022c.415 0 .752.329.752.734v.301c0 .405.336.734.751.734h1.5a.743.743 0 0 0 .751-.734v-3.836c0-.595-.195-1.175-.555-1.655l-.876-1.148a1.3 1.3 0 0 1-.168-.313l-.788-2.139c-.198-.55-.711-.97-1.3-1.062a20.2 20.2 0 0 0-6.14 0 1.67 1.67 0 0 0-1.292 1.062l-.789 2.14a1.2 1.2 0 0 1-.168.299l-.89 1.197a2.73 2.73 0 0 0-.54 1.633z"
    />
  </Svg>
);
export default IconlystCarRentalLight;
