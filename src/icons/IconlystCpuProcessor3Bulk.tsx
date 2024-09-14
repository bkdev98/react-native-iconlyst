import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor3Bulk = ({
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
      d="M8.515 4.535a4 4 0 0 0-4 4v6.93a4 4 0 0 0 4 4h6.97a4 4 0 0 0 4-4v-6.93a4 4 0 0 0-4-4zm7.163 8.784c0 1.384-.938 2.359-2.285 2.359h-2.786c-1.347 0-2.285-.975-2.285-2.36v-2.637c0-1.393.938-2.36 2.285-2.36h2.786c1.347 0 2.285.967 2.285 2.36z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.613 2.253a.75.75 0 0 1 .75.75V4.53h-1.5V3.003a.75.75 0 0 1 .75-.75M13.637 3.003V4.53h1.5V3.003a.75.75 0 0 0-1.5 0M19.485 10.366V9.018l-.002-.152H21a.75.75 0 0 1 0 1.5zM19.485 14.99l-.002.143H21a.75.75 0 0 0 0-1.5h-1.515zM15.137 19.465v1.532a.75.75 0 0 1-1.5 0v-1.532zM10.363 19.465h-1.5v1.532a.75.75 0 0 0 1.5 0zM4.51 13.634v1.355q0 .073.002.144H3a.75.75 0 0 1 0-1.5zM4.51 9.018q0-.075.002-.15H3a.75.75 0 1 0 0 1.5h1.51zM10.624 9.813h2.752c.703 0 .809.559.809.892v2.593c0 .331-.106.888-.81.888h-2.751c-.706 0-.811-.557-.811-.888v-2.593c0-.333.105-.892.81-.892"
    />
  </Svg>
);
export default IconlystCpuProcessor3Bulk;
