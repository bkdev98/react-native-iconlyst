import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashCircleDisableOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.835 6.303A8.25 8.25 0 1 0 6.167 17.97 8.25 8.25 0 0 0 17.835 6.303M5.107 5.243c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.981 0-13.789"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.047 7.404c.71-.979 2.257-.475 2.257.733v2.144h1.989c1.02 0 1.608 1.157 1.01 1.981l-3.348 4.61c-.71.98-2.258.475-2.258-.732v-2.145H8.71a1.247 1.247 0 0 1-1.01-1.98m0 0 3.348-4.611m.757 1.51-2.6 3.58h2.243a.75.75 0 0 1 .75.75v2.119l2.6-3.582h-2.243a.75.75 0 0 1-.75-.75zm.457-.629"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.147 5.282a.75.75 0 0 1 1.061 0l4.298 4.299a.75.75 0 0 1-1.06 1.06L5.147 6.343a.75.75 0 0 1 0-1.06M13.555 13.688a.75.75 0 0 1 1.06 0l4.195 4.195a.75.75 0 1 1-1.061 1.06l-4.194-4.194a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashCircleDisableOutline;
