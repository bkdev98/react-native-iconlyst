import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeHomeLight = ({
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
      d="M17.33 21H6.9a3.32 3.32 0 0 1-3.322-3.322v-7.174c0-.89.401-1.734 1.092-2.298l5.574-4.54a2.964 2.964 0 0 1 3.743 0l5.574 4.54a2.97 2.97 0 0 1 1.092 2.299v7.173A3.32 3.32 0 0 1 17.33 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.997 9.917v.048m.19-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .391 0M15.434 10.76h-3.1a.5.5 0 0 0-.5.5v6.38M15.434 14.492h-3.6"
    />
  </Svg>
);
export default IconlystFarenheitDegreeHomeLight;
