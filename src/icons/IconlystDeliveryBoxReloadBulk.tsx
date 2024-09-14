import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxReloadBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.18 15.023a.75.75 0 0 0-.769.036l-.746.495C4.131 12.553 4.626 8.83 7.137 6.293a8.03 8.03 0 0 1 7.105-2.241.75.75 0 1 0 .264-1.476 9.53 9.53 0 0 0-8.434 2.66c-3.025 3.058-3.579 7.559-1.66 11.148l-.97.644a.75.75 0 0 0 .132 1.32l2.978 1.21a.75.75 0 0 0 1.032-.697l-.009-3.18a.75.75 0 0 0-.396-.658M22.59 6.272a.75.75 0 0 0-.465-.62l-2.978-1.21a.75.75 0 0 0-1.033.697l.01 3.18a.751.751 0 0 0 1.163.622l.747-.495c1.534 3.001 1.04 6.724-1.472 9.261a8.02 8.02 0 0 1-7.106 2.241.749.749 0 1 0-.263 1.476 9.53 9.53 0 0 0 8.434-2.66c3.025-3.057 3.58-7.559 1.66-11.149l.97-.643a.75.75 0 0 0 .332-.7" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.806 10.698a.2.2 0 0 1 .3-.173l2.84 1.649a.3.3 0 0 1 .15.259v3.213a.2.2 0 0 1-.299.174l-2.22-1.27c-.48-.29-.77-.79-.77-1.35zM15.857 8.85c.14.075.146.276.009.356l-2.869 1.666a.3.3 0 0 1-.302 0l-2.86-1.666a.205.205 0 0 1 .01-.356c.757-.406 1.49-.883 2.231-1.31.47-.28 1.07-.28 1.55 0 .742.427 1.474.904 2.231 1.31M16.596 10.525a.2.2 0 0 1 .3.173V13.2c0 .56-.29 1.06-.77 1.35l-2.23 1.279a.2.2 0 0 1-.3-.174v-3.212a.3.3 0 0 1 .15-.26z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxReloadBulk;
