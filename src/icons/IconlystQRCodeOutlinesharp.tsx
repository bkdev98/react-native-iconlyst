import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 3.139h8.306v8.305H2.75zm1.5 1.5v5.305h5.306V4.64zM2.75 13.833h8.306v8.306H2.75zm1.5 1.5v5.306h5.306v-5.306zM13.445 13.833h8.305v8.306h-8.305zm1.5 1.5v5.306h5.305v-5.306zM13.445 3.139h3.93v1.5h-2.43v4.12h-1.5zm5.104 0h3.201V6.34h-1.5V4.64h-1.701zm3.201 4.375v3.93h-3.201v-1.5h1.701v-2.43zm-8.305 2.43h3.72v1.5h-3.72z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.097 9.223h-3.33V5.504h1.5v2.219h1.83z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.194 7.004v-1.51h1.5v1.51zM6.152 8.09V6.493h1.5V8.09zM6.152 18.784v-1.597h1.5v1.597zM16.848 18.784v-1.597h1.5v1.597z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQRCodeOutlinesharp;
