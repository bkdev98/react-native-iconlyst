import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondBold = ({
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
      d="m15.325 13.62-2.794 2.804c-.044.044-.1.072-.152.102-.03.018-.055.044-.087.058a.752.752 0 0 1-.824-.16l-2.792-2.803a.75.75 0 0 1 1.064-1.06l1.511 1.518V8.732a.75.75 0 0 1 1.5 0v5.347l1.512-1.517a.749.749 0 1 1 1.062 1.059m4.655-4.615-4.672-4.672c-1.979-1.98-4.58-2.035-6.474-.142L3.876 9.149c-1.893 1.893-1.836 4.495.143 6.473l4.672 4.672c1.016 1.015 2.195 1.524 3.358 1.524 1.104 0 2.194-.459 3.116-1.38l4.958-4.96c1.894-1.892 1.836-4.494-.143-6.473"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownDiamondBold;
