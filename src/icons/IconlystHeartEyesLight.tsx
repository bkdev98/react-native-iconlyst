import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartEyesLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.12 15.29C9.12 16.5 10.854 17.5 12 17.5s2.88-1 2.88-2.212M10.48 9.52c.064-.627-.298-1.251-.956-1.318-.346-.035-.688.1-.916.362a1.08 1.08 0 0 0-.983.041c-.574.33-.652 1.047-.34 1.593.49.868 1.948 1.306 1.948 1.306s1.145-.98 1.248-1.985M13.415 9.52c-.063-.627.298-1.251.956-1.318.346-.035.688.1.917.362.315-.145.68-.13.983.041.573.33.652 1.047.34 1.593-.49.868-1.948 1.306-1.948 1.306s-1.146-.98-1.248-1.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartEyesLight;
