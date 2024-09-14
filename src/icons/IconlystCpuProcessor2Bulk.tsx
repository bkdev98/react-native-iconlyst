import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor2Bulk = ({
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
      d="M8.515 4.535a4 4 0 0 0-4 4v6.93a4 4 0 0 0 4 4h6.97a4 4 0 0 0 4-4v-6.93a4 4 0 0 0-4-4zm7.445 8.885c0 1.49-1.01 2.54-2.46 2.54h-3c-1.45 0-2.46-1.05-2.46-2.54v-2.84c0-1.5 1.01-2.54 2.46-2.54h3c1.45 0 2.46 1.04 2.46 2.54z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.613 2.253a.75.75 0 0 1 .75.75V4.53h-1.5V3.003a.75.75 0 0 1 .75-.75M13.637 3.003V4.53h1.5V3.003a.75.75 0 0 0-1.5 0M19.485 10.366V9.018l-.002-.152H21a.75.75 0 0 1 0 1.5zM19.485 14.99l-.002.143H21a.75.75 0 0 0 0-1.5h-1.515zM15.137 19.465v1.532a.75.75 0 0 1-1.5 0v-1.532zM10.363 19.465h-1.5v1.532a.75.75 0 0 0 1.5 0zM4.516 13.634v1.355l.001.144H3a.75.75 0 0 1 0-1.5zM4.516 9.018q0-.075.002-.15H3a.75.75 0 1 0 0 1.5h1.516zM13.57 10.734V9.545c.794.04.888.733.888 1.038v2.835c0 .313-.093 1.041-.954 1.041h-1.41v-1.196a.75.75 0 1 0-1.5 0v1.196h-.099c-.864 0-.958-.728-.958-1.04v-2.836c0-.314.094-1.045.958-1.045h1.575v1.196a.75.75 0 1 0 1.5 0"
    />
  </Svg>
);
export default IconlystCpuProcessor2Bulk;
