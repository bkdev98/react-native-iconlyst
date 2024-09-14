import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDSuccesOutline = ({
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
      d="M21.251 15.065a.75.75 0 0 1 .75.75v1.576a4.643 4.643 0 0 1-4.643 4.642H16.07a.75.75 0 1 1 0-1.5h1.29a3.143 3.143 0 0 0 3.142-3.142v-1.576a.75.75 0 0 1 .75-.75M3.249 15.065a.75.75 0 0 1 .75.75v1.576a3.143 3.143 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5H7.142a4.643 4.643 0 0 1-4.643-4.642v-1.576a.75.75 0 0 1 .75-.75M7.142 4.033a3.14 3.14 0 0 0-3.143 3.142v1.577a.75.75 0 1 1-1.5 0V7.175a4.64 4.64 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM15.35 3.283a.75.75 0 0 1 .75-.75h1.258A4.64 4.64 0 0 1 22 7.175v1.577a.75.75 0 0 1-1.5 0V7.175a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M8.812 7.357a.75.75 0 0 1 .75.75v.612a.75.75 0 1 1-1.5 0v-.612a.75.75 0 0 1 .75-.75m6.878 0a.75.75 0 0 1 .75.75v.612a.75.75 0 0 1-1.5 0v-.612a.75.75 0 0 1 .75-.75M12.718 8.674a.75.75 0 0 1 .75.75v1.97c0 .338-.052.684-.224 1.01a1.97 1.97 0 0 1-.735.754l-.296.193a.75.75 0 1 1-.818-1.258l.305-.198.018-.011c.138-.085.18-.146.2-.181.02-.04.05-.123.05-.308V9.424a.75.75 0 0 1 .75-.75M8.232 14.537a.75.75 0 0 1 1.056-.103c1.068.878 2.058 1.267 2.982 1.27.921.005 1.894-.373 2.932-1.26a.75.75 0 1 1 .975 1.14c-1.232 1.053-2.54 1.626-3.913 1.62-1.368-.005-2.682-.586-3.929-1.61a.75.75 0 0 1-.103-1.057"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDSuccesOutline;
