import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyTwoTone = ({
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
      d="M16.717 3H8.282C5.342 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.334 21 8.282 21h8.434c2.949 0 4.784-2.081 4.784-5.026V8.026C21.5 5.081 19.665 3 16.717 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.376 16.736c-.947 0-1.752-.806-1.752-1.753 0-1.741 1.836-2.568 3.3-2.837.879-.162 2.063-.134 2.945-.266a6.6 6.6 0 0 0 2.052-.663c.866-.45 1.461-1.194 1.461-2.203 0-.947-.806-1.752-1.8-1.752"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.518 16.736a1.895 1.895 0 0 1-1.894-1.895V9.157a1.895 1.895 0 1 1 3.789 0v5.684a1.894 1.894 0 0 1-1.895 1.895ZM15.485 16.736a1.895 1.895 0 0 1-1.894-1.895V9.157a1.895 1.895 0 1 1 3.789 0v5.684a1.894 1.894 0 0 1-1.895 1.895Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHarmonyTwoTone;
