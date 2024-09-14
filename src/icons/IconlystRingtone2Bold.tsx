import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.998 20.25c-1.17 0-2.12-.94-2.13-2.11h4.27a2.143 2.143 0 0 1-2.14 2.11m-3.01-10.4c-.04 0-.08 0-.12-.01a.74.74 0 0 1-.62-.86c.18-1.14.97-2.07 2.06-2.43.4-.12.82.09.95.48a.75.75 0 0 1-.48.95c-.55.18-.96.66-1.05 1.24a.75.75 0 0 1-.74.63m10.48 4.55-.43-.93c-.28-.58-.42-1.24-.42-1.89v-1.22c0-3.4-2.57-6.2-5.87-6.57V3a.749.749 0 1 0-1.5 0v.79a6.615 6.615 0 0 0-5.86 6.57v1.22c0 .65-.15 1.31-.43 1.89l-.43.93c-.38.81-.33 1.76.16 2.52.48.76 1.31 1.22 2.22 1.22h1.46a3.63 3.63 0 0 0 3.63 3.61c2 0 3.62-1.62 3.64-3.61h1.46c.9 0 1.73-.46 2.22-1.22.48-.76.54-1.71.15-2.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtone2Bold;
