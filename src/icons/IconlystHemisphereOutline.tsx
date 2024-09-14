import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereOutline = ({
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
      fillRule="evenodd"
      d="M6.773 3.028a.75.75 0 0 1 0 1.06A9.467 9.467 0 1 0 20.16 17.477a.75.75 0 0 1 1.06 1.062c-4.282 4.283-11.226 4.283-15.509 0s-4.283-11.227 0-15.51a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.914 3.751c-.583-.016-.935.132-1.141.338-.207.206-.354.558-.338 1.141.016.585.199 1.33.569 2.192.738 1.723 2.158 3.776 4.103 5.72 1.945 1.945 3.998 3.365 5.72 4.104.864.37 1.608.553 2.193.569.582.016.935-.132 1.14-.338.207-.206.355-.558.339-1.141-.017-.585-.2-1.329-.57-2.192-.738-1.723-2.158-3.775-4.103-5.72s-3.997-3.365-5.72-4.104c-.863-.37-1.607-.553-2.192-.569m8.973 3.612c-2.046-2.045-4.252-3.59-6.19-4.421-.967-.415-1.904-.667-2.741-.69-.84-.024-1.652.184-2.244.776s-.8 1.404-.777 2.244c.024.838.276 1.774.69 2.741.83 1.938 2.376 4.145 4.42 6.19 2.047 2.045 4.253 3.59 6.191 4.421.967.415 1.904.667 2.742.69.84.024 1.652-.184 2.243-.776.592-.592.8-1.404.777-2.244-.023-.838-.276-1.774-.69-2.741-.83-1.938-2.376-4.145-4.421-6.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHemisphereOutline;
