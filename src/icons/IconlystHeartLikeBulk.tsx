import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLikeBulk = ({
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
      d="M21.485 6.976c-.68-1.681-1.994-2.906-3.695-3.452a6.15 6.15 0 0 0-2.91-.207c-.894.149-1.703.684-2.383 1.181-.656-.476-1.485-1.02-2.382-1.171a6.3 6.3 0 0 0-2.909.197c-3.73 1.207-4.879 5.289-3.836 8.534 1.624 5.212 8.62 8.525 8.916 8.664a.5.5 0 0 0 .423 0c.292-.136 7.184-3.392 8.905-8.657l.001-.002c.551-1.716.504-3.523-.13-5.087"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartLikeBulk;
