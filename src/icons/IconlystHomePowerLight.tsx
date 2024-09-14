import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomePowerLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.215 21.27H6.784a3.32 3.32 0 0 1-3.322-3.322v-7.174c0-.891.4-1.735 1.092-2.298l5.574-4.541a2.964 2.964 0 0 1 3.743 0l5.574 4.54a2.97 2.97 0 0 1 1.092 2.3v7.173a3.32 3.32 0 0 1-3.322 3.322"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.75a3.23 3.23 0 0 1-3.229-3.228v-2.015a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.23 3.23 0 0 1-3.229 3.228M11.999 16.754v4.505M10.315 10.867V8.784m3.368 2.083V8.784"
    />
  </Svg>
);
export default IconlystHomePowerLight;
