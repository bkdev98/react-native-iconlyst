import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDFailOutline = ({
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
      d="M21.25 15.74a.75.75 0 0 1 .75.75v1.578a4.643 4.643 0 0 1-4.643 4.642h-1.289a.75.75 0 1 1 0-1.5h1.29a3.143 3.143 0 0 0 3.142-3.142V16.49a.75.75 0 0 1 .75-.75M3.25 15.74a.75.75 0 0 1 .75.75v1.577a3.143 3.143 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.643 4.643 0 0 1 2.5 18.067V16.49a.75.75 0 0 1 .75-.75M7.143 4.709A3.143 3.143 0 0 0 4 7.851v1.578a.75.75 0 0 1-1.5 0V7.851a4.643 4.643 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM15.35 3.959a.75.75 0 0 1 .75-.75h1.257A4.643 4.643 0 0 1 22 7.851v1.578a.75.75 0 0 1-1.5 0V7.851a3.143 3.143 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M8.81 7.83a.75.75 0 0 1 .75.75v.612a.75.75 0 0 1-1.5 0V8.58a.75.75 0 0 1 .75-.75m6.878 0a.75.75 0 0 1 .75.75v.612a.75.75 0 1 1-1.5 0V8.58a.75.75 0 0 1 .75-.75M12.27 16.647c-.925.003-1.915.392-2.983 1.27a.75.75 0 0 1-.953-1.159c1.247-1.025 2.561-1.606 3.93-1.611 1.372-.006 2.68.568 3.912 1.62a.75.75 0 1 1-.975 1.14c-1.038-.886-2.011-1.264-2.931-1.26M12.719 9.145a.75.75 0 0 1 .75.75v1.971c0 .337-.052.683-.224 1.009a1.97 1.97 0 0 1-.735.754l-.296.193a.75.75 0 1 1-.818-1.257l.305-.198.018-.012c.138-.085.18-.145.2-.18.02-.04.05-.123.05-.309v-1.97a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDFailOutline;
