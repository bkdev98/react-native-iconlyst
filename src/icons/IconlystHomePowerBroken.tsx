import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomePowerBroken = ({
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
      d="M3.462 17.948a3.32 3.32 0 0 0 3.322 3.322h10.43a3.32 3.32 0 0 0 3.323-3.322v-7.174c0-.891-.401-1.735-1.092-2.298L13.87 3.935a2.964 2.964 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.3v3.586"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.228 11.507a.64.64 0 0 0-.64-.64H9.41a.64.64 0 0 0-.64.64v2.015a3.228 3.228 0 0 0 6.334.884M11.999 16.754v4.505M10.315 10.867V8.784m3.368 2.083V8.784"
    />
  </Svg>
);
export default IconlystHomePowerBroken;
