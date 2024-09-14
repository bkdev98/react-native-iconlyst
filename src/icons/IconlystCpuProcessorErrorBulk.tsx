import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorBulk = ({
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
      d="M19.48 13.63v-1.49a.31.31 0 0 0-.3-.307 6.33 6.33 0 0 1-2.993-.888c-.211-.127-.497.018-.497.265v2.09c0 1.4-.95 2.39-2.31 2.39h-2.75c-1.36 0-2.32-.99-2.32-2.39v-2.59c0-1.41.96-2.4 2.32-2.4h2.75c.167 0 .306-.189.24-.343-.407-.96-.578-2.048-.441-3.084a.317.317 0 0 0-.307-.363H8.74c-2.51 0-4.19 1.75-4.21 4.35v6.26c.02 2.6 1.7 4.35 4.21 4.35h6.53c2.5 0 4.18-1.75 4.2-4.35z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.315 5.68c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75V3c0-.42.33-.75.75-.75.41 0 .75.33.75.75zM17.535 8.84h.03c.4 0 .73-.34.75-.74a.74.74 0 0 0-.71-.79c-.38-.01-.76.29-.78.71l-.01.06c-.02.41.3.73.72.76M10.63 9.81c-.74 0-.82.63-.82.9v2.59c0 .33.11.89.82.89h2.75c.7 0 .81-.56.81-.89v-2.59c0-.34-.11-.9-.81-.9zM10.363 3.003a.75.75 0 0 0-1.5 0V4.53h1.5zM19.47 15.12l.002-.143V13.62l1.527.013a.75.75 0 0 1 0 1.5zM15.137 19.465v1.532a.75.75 0 0 1-1.5 0v-1.532zM8.863 19.465h1.5v1.532a.75.75 0 0 1-1.5 0zM4.535 13.634v1.355q0 .073.002.144H3a.75.75 0 0 1 0-1.5zM4.537 8.867l-.002.151v1.35H3a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorBulk;
