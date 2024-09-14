import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLongLightSquareLight = ({
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
      d="M17.502 10.384h-2M17.502 12.885h-2M17.502 15.386h-2M13 12.835c-.03-.916-.116-1.843-.439-2.725a2.8 2.8 0 0 0-.503-.897 1.16 1.16 0 0 0-.968-.424 4.55 4.55 0 0 0-1.884.51 3.9 3.9 0 0 0-1.696 1.667c-.7 1.3-.674 2.606.025 3.895.446.823 1.113 1.37 1.91 1.735.514.235 1.056.34 1.61.381.53.041.92-.216 1.203-.68.274-.45.433-.957.542-1.48.135-.646.182-1.301.2-1.982z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.032 3.885h8.435c2.948 0 4.783 2.081 4.783 5.026v7.947c0 2.946-1.835 5.027-4.784 5.027H8.032c-2.948 0-4.782-2.081-4.782-5.027V8.911c0-2.945 1.843-5.026 4.782-5.026"
    />
  </Svg>
);
export default IconlystLongLightSquareLight;
