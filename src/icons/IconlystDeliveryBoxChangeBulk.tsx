import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxChangeBulk = ({
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
      <Path d="m21.068 7.145.008-.005.78-.52c.23-.16.36-.43.33-.71a.76.76 0 0 0-.48-.62l-2.73-1.05a.74.74 0 0 0-.69.08c-.21.13-.33.36-.33.61l-.02 2.88c0 .28.15.54.39.67a.74.74 0 0 0 .77-.04l.71-.47.006-.004c1.799 3.063 1.4 7.102-1.198 9.72a8.03 8.03 0 0 1-7.105 2.24.756.756 0 0 0-.87.606.75.75 0 0 0 .607.87q.84.15 1.679.149a9.52 9.52 0 0 0 6.754-2.808c3.1-3.125 3.564-7.954 1.389-11.598M7.376 15.52a.74.74 0 0 0-.77.04l-.716.478c-1.801-3.064-1.403-7.104 1.196-9.723a8.02 8.02 0 0 1 7.104-2.24c.41.07.797-.198.87-.606a.75.75 0 0 0-.606-.871 9.54 9.54 0 0 0-8.433 2.66c-3.1 3.125-3.564 7.955-1.39 11.598l-.785.524c-.23.16-.36.43-.33.71s.21.52.48.62l2.73 1.05q.135.06.27.06c.15 0 .3-.05.42-.13.21-.14.33-.37.33-.62l.02-2.88c0-.28-.15-.54-.39-.67" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.376 10.84c0-.41.33-.75.75-.75h1.54c.42 0 .76.34.76.75 0 .42-.34.75-.76.75h-1.54c-.42 0-.75-.33-.75-.75m3.15 5.15c1.38 0 2.35-1 2.35-2.43l.01-3.08c0-.72-.24-1.36-.68-1.81-.43-.42-1-.65-1.67-.65l-3.27-.01c-1.38 0-2.35 1.01-2.35 2.44l-.01 3.08c0 .72.24 1.36.68 1.8.43.43 1 .65 1.67.65z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxChangeBulk;
