import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefresh2Outline = ({
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
      d="M7.593 20.303a4.83 4.83 0 0 1-3.488-1.419 5.7 5.7 0 0 1-1.6-4.089V8.92a5.205 5.205 0 0 1 5.1-5.515h8.4a5.205 5.205 0 0 1 5.1 5.515v1.6a.75.75 0 1 1-1.5 0v-1.6a3.7 3.7 0 0 0-3.6-4.015h-8.4a3.7 3.7 0 0 0-3.6 4.015v5.876a4.2 4.2 0 0 0 1.162 3.027 3.36 3.36 0 0 0 2.431.981h4.134a.75.75 0 1 1 0 1.5H7.593"
    />
    <Path
      fill={props.color}
      d="M11.83 13.43a2.7 2.7 0 0 1-1.685-.59l-3.84-3.1a.75.75 0 1 1 .942-1.168l3.834 3.09a1.21 1.21 0 0 0 1.51 0l3.792-3.084a.75.75 0 0 1 .947 1.164l-3.8 3.09a2.73 2.73 0 0 1-1.7.598M18.318 20.596a3.69 3.69 0 0 1-3.687-3.686.75.75 0 1 1 1.5 0 2.187 2.187 0 0 0 3.632 1.641.75.75 0 0 1 .99 1.123 3.67 3.67 0 0 1-2.435.922M21.254 17.66a.75.75 0 0 1-.75-.75 2.187 2.187 0 0 0-3.632-1.64.752.752 0 0 1-1.246-.608.75.75 0 0 1 .252-.516 3.686 3.686 0 0 1 6.126 2.764.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystEmailRefresh2Outline;
