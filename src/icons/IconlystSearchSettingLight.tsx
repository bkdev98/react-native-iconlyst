import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettingLight = ({
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
      d="M19.63 12.886a8.052 8.052 0 0 1-16.032-1.05 8.05 8.05 0 0 1 7.049-7.988M17.127 17.733 20.403 21M17.551 3v1.047m0 4.188v1.047M14.828 4.57l.904.524m3.637 2.094.903.523m-5.444 0 .904-.523m3.637-2.094.903-.524m-1.241.09a2.094 2.094 0 1 1-2.96 2.961 2.094 2.094 0 0 1 2.96-2.962"
    />
  </Svg>
);
export default IconlystSearchSettingLight;
