import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortLightSquareLight = ({
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
      d="m17.752 10.884-2-.5M17.752 13.385l-2-.5M17.752 15.886l-2-.5M13.25 12.835c-.03-.916-.115-1.843-.438-2.725a2.8 2.8 0 0 0-.503-.897 1.16 1.16 0 0 0-.968-.424 4.55 4.55 0 0 0-1.885.51 3.9 3.9 0 0 0-1.696 1.667c-.7 1.3-.674 2.606.026 3.895.446.823 1.112 1.37 1.909 1.735.515.235 1.056.34 1.61.381.531.041.92-.216 1.204-.68.274-.45.432-.957.542-1.48.135-.646.181-1.301.199-1.982z"
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
export default IconlystShortLightSquareLight;
