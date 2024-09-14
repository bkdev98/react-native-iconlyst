import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhoneBold = ({
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
      d="M16.426 4.091a2.88 2.88 0 0 1 1.88 1.906l-.26-.11a.751.751 0 0 0-.592 1.378l1.4.6q.144.06.296.06a.75.75 0 0 0 .744-.662c.238-2.013-1.06-3.99-3.02-4.604a.75.75 0 0 0-.94.493.75.75 0 0 0 .492.94M18.76 16.576a.749.749 0 1 1-1.5 0v-2.3a.749.749 0 1 1 1.5 0zm-.54-7.21h-2.71a.2.2 0 0 0-.2.2v8.11a4.17 4.17 0 0 1-1.512 3.252c-.16.132-.072.438.135.438h4.287c2.04 0 3.7-1.66 3.7-3.7v-4.6c0-2.08-1.62-3.7-3.7-3.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.18 7.426h-2.2a.75.75 0 0 1 0-1.5h2.2a.75.75 0 0 1 0 1.5m-.223 11.029a.96.96 0 0 1-.88.656h-.01a.957.957 0 0 1-.937-.951c0-.514.43-.95.937-.95.436 0 .963.415.963.932a.75.75 0 0 1-.073.313M14.08 6.576c0-2.04-1.66-3.7-3.7-3.7h-4.6a3.66 3.66 0 0 0-3.7 3.7v11.1a3.66 3.66 0 0 0 3.7 3.7h4.6a3.66 3.66 0 0 0 3.7-3.7z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotatePhoneBold;
