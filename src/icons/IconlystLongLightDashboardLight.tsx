import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLongLightDashboardLight = ({
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
      d="M7.248 10.384h2M7.248 12.885h2M7.248 15.386h2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.889a9.004 9.004 0 0 1-9.004-9.004v0A9.004 9.004 0 0 1 12.25 3.88v0a9.004 9.004 0 0 1 9.004 9.004v0a9.004 9.004 0 0 1-9.004 9.004"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.75 12.835c.03-.916.116-1.843.439-2.725.12-.33.277-.637.503-.897.264-.303.586-.439.968-.424a4.55 4.55 0 0 1 1.884.51 3.9 3.9 0 0 1 1.696 1.667c.7 1.3.674 2.606-.025 3.895-.446.823-1.113 1.37-1.91 1.735-.514.235-1.056.34-1.61.381-.53.041-.92-.216-1.203-.68-.274-.45-.433-.957-.542-1.48-.135-.646-.182-1.301-.2-1.982z"
    />
  </Svg>
);
export default IconlystLongLightDashboardLight;
