import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSendOutline = ({
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
      d="M12.25 3.813A8.253 8.253 0 0 0 4 12.063a8.253 8.253 0 0 0 8.25 8.25 8.253 8.253 0 0 0 8.25-8.25.75.75 0 0 1 1.5 0c0 5.382-4.368 9.75-9.75 9.75s-9.75-4.368-9.75-9.75c0-5.383 4.368-9.75 9.75-9.75a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.293 10.607c0-1.19.966-2.156 2.157-2.156h2.611a.75.75 0 1 1 0 1.5H11.45a.656.656 0 1 0 0 1.313h1.607a2.156 2.156 0 0 1 0 4.313h-2.612a.75.75 0 0 1 0-1.5h2.612a.656.656 0 0 0 0-1.313H11.45a2.156 2.156 0 0 1-2.157-2.157"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.254 7.262a.75.75 0 0 1 .75.75v1.19a.75.75 0 0 1-1.5 0v-1.19a.75.75 0 0 1 .75-.75m0 6.812a.75.75 0 0 1 .75.75v1.182a.75.75 0 0 1-1.5 0v-1.182a.75.75 0 0 1 .75-.75M17.165 3.504a.75.75 0 0 1 .75-.75h2.893a.75.75 0 0 1 .75.75v2.894a.75.75 0 0 1-1.5 0V4.254h-2.143a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.338 2.974a.75.75 0 0 1 0 1.06l-3.905 3.907a.75.75 0 1 1-1.061-1.06l3.906-3.907a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarSendOutline;