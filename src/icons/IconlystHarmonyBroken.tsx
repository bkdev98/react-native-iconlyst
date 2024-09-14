import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyBroken = ({
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
      strokeWidth={1.5}
      d="M9.376 16.736c-.947 0-1.752-.806-1.752-1.753 0-1.741 1.836-2.568 3.3-2.837.879-.162 2.063-.134 2.945-.266a6.6 6.6 0 0 0 2.052-.663c.866-.45 1.461-1.194 1.461-2.203 0-.947-.806-1.752-1.8-1.752"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.518 16.736a1.895 1.895 0 0 1-1.894-1.895V9.157a1.895 1.895 0 1 1 3.789 0v5.684a1.894 1.894 0 0 1-1.895 1.895ZM15.485 16.736a1.895 1.895 0 0 1-1.894-1.895V9.157a1.895 1.895 0 1 1 3.789 0v5.684a1.894 1.894 0 0 1-1.895 1.895Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 21H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.375"
    />
  </Svg>
);
export default IconlystHarmonyBroken;
