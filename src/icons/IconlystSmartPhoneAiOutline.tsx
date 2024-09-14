import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartPhoneAiOutline = ({
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
      d="M10.283 3a.75.75 0 0 1 .75-.75h3.724a4.37 4.37 0 0 1 4.368 4.367v10.764a4.37 4.37 0 0 1-4.368 4.369H9.243a4.37 4.37 0 0 1-4.368-4.367v-5.791a.75.75 0 0 1 1.5 0v5.79a2.87 2.87 0 0 0 2.868 2.868h5.514a2.87 2.87 0 0 0 2.869-2.868l-.001-10.764a2.87 2.87 0 0 0-2.868-2.868h-3.724a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11 17.28a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.168 9.534a.75.75 0 0 1-.703-.49l-.101-.274A3.01 3.01 0 0 0 4.585 6.99l-.273-.102a.75.75 0 0 1 0-1.406l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 1.408 0l.101.273A3.01 3.01 0 0 0 9.752 5.38l.273.1a.75.75 0 0 1 0 1.407l-.273.102A3.01 3.01 0 0 0 7.973 8.77l-.101.274a.75.75 0 0 1-.704.49m.95-3.35a4.5 4.5 0 0 1-.95-.95 4.5 4.5 0 0 1-.948.95c.361.267.681.588.948.95.268-.362.587-.683.95-.95M12.48 10.776a.75.75 0 0 1-.719-.532 1.02 1.02 0 0 0-.677-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.099.326.353.58.677.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.677.679.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartPhoneAiOutline;
