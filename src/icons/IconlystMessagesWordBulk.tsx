import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesWordBulk = ({
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
      d="M19.472 6.858a9.53 9.53 0 0 0-6.919-3.629 9.5 9.5 0 0 0-7.275 2.774c-2.806 2.814-3.57 7.137-1.914 10.732.04.1.162.404.99 1.846a.47.47 0 0 1-.024.51c-.222.313-.503.714-.722 1.043a1.38 1.38 0 0 0-.069 1.418c.24.445.701.723 1.205.723h.002l.615-.002c2.371 0 5.785-.003 6.603.002h.033a9.5 9.5 0 0 0 7.272-3.397c2.898-3.437 2.983-8.492.203-12.02"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.183 16.339a.75.75 0 1 0 1.374-.6l-2.869-6.59a.75.75 0 0 0-1.375 0l-2.87 6.59a.75.75 0 1 0 1.374.6l.832-1.906h2.704zm-1.484-3.407h-1.398l.7-1.606z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesWordBulk;
