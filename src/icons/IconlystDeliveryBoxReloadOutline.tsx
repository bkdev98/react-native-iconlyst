import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxReloadOutline = ({
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
      fill={props.color}
      d="M21.835 6.3a.747.747 0 0 1-.882.59l-.943-.187a9.51 9.51 0 0 1-1.126 12.027 9.5 9.5 0 0 1-8.434 2.67.76.76 0 0 1-.606-.87.754.754 0 0 1 .871-.61c2.505.45 5.178-.3 7.104-2.24a8.016 8.016 0 0 0 .974-10.098l-.17.858a.756.756 0 0 1-.882.59.75.75 0 0 1-.59-.88l.531-2.67a.746.746 0 0 1 .882-.59l2.682.53c.406.08.67.48.589.88M2.364 17.7a.75.75 0 0 1 .882-.59l.944.186A9.505 9.505 0 0 1 5.317 5.27 9.5 9.5 0 0 1 13.75 2.6c.408.08.68.47.606.87a.754.754 0 0 1-.87.61A8 8 0 0 0 6.38 6.32a8.015 8.015 0 0 0-.974 10.096l.17-.856c.08-.4.475-.67.881-.59s.671.48.59.88l-.53 2.67c-.039.2-.154.37-.319.48-.166.11-.368.15-.563.11l-2.683-.53a.75.75 0 0 1-.589-.88"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.935 16.463a1.8 1.8 0 0 1-.738-.233l-2.5-1.44a1.8 1.8 0 0 1-.897-1.56v-2.88c0-.64.342-1.24.897-1.56l2.5-1.44a1.8 1.8 0 0 1 1.793 0l2.5 1.44c.557.32.897.92.897 1.56v2.88c0 .64-.34 1.24-.896 1.56l-2.5 1.44c-.23.132-.481.21-.737.233a.75.75 0 0 1-.32 0M9.3 11.027v2.203c0 .074.025.144.07.197a.3.3 0 0 0 .078.063l1.896 1.093v-2.37zm3.544 1.185v2.37l1.897-1.092a.29.29 0 0 0 .135-.174.3.3 0 0 0 .011-.086v-2.204zm1.279-2.478L12.24 8.65a.31.31 0 0 0-.295 0l-1.881 1.085 2.029 1.177z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxReloadOutline;
