import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingBulk = ({
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
      d="M6.371 15.077 4.65 16.799a1 1 0 0 0 1.414 1.413l1.722-1.721a.999.999 0 1 0-1.414-1.415M6.836 4.841a1 1 0 0 0-1.414 1.415l.949.95a1 1 0 0 0 .707.291.999.999 0 0 0 .707-1.707zM17.07 15.077a.999.999 0 1 0-1.414 1.414l1.722 1.721a1 1 0 0 0 .707.294 1 1 0 0 0 .707-1.707z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.72 16.707a1 1 0 0 0-1 1v2.434a1 1 0 1 0 2 0v-2.434a1 1 0 0 0-1-1M20.72 10.14h-2.433a1 1 0 0 0 0 2h2.434a1 1 0 1 0 0-2M6.154 11.14a1 1 0 0 0-1-1H3.28a1 1 0 1 0 0 2h1.875a1 1 0 0 0 1-1M11.72 2.857a1 1 0 0 0-1 1v.718a1 1 0 1 0 2 0v-.718a1 1 0 0 0-1-1" />
    </G>
  </Svg>
);
export default IconlystLoadingBulk;
