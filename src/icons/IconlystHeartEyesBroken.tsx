import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartEyesBroken = ({
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
      d="M12.25 3a9 9 0 1 0 3.473.695"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.37 15.29c0 1.211 1.734 2.211 2.88 2.211s2.88-1 2.88-2.212M10.73 9.52c.063-.627-.298-1.251-.956-1.318-.346-.035-.688.1-.917.362a1.08 1.08 0 0 0-.983.041c-.573.33-.652 1.047-.34 1.593.49.868 1.948 1.306 1.948 1.306s1.146-.98 1.248-1.985M13.665 9.52c-.063-.627.299-1.251.957-1.318.346-.035.687.1.916.362.316-.145.68-.13.983.041.574.33.652 1.047.34 1.593-.49.868-1.948 1.306-1.948 1.306s-1.146-.98-1.248-1.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartEyesBroken;
