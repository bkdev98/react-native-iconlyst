import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaErrorBulk = ({
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
      d="M21.374 14.363a1 1 0 0 0-1.414 0l-2.14 2.14-2.139-2.14a.999.999 0 1 0-1.414 1.414l2.139 2.138-2.138 2.137a1 1 0 1 0 1.414 1.415l2.138-2.138 2.139 2.138a1 1 0 0 0 .707.292 1 1 0 0 0 .707-1.707l-2.138-2.137 2.139-2.138a1 1 0 0 0 0-1.414M3 14.11a1 1 0 0 0-1 1v5.65a1 1 0 1 0 2 0v-5.65a1 1 0 0 0-1-1M8.999 10.25a1 1 0 0 0-1 1v9.51a1 1 0 1 0 2 0v-9.51a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.974 11.78a1 1 0 0 0 1-1V7.17a1 1 0 1 0-2 0v3.61a1 1 0 0 0 1 1M21 2.24a1 1 0 0 0-1 1v7.54a1 1 0 1 0 2 0V3.24a1 1 0 0 0-1-1" />
    </G>
  </Svg>
);
export default IconlystAntenaErrorBulk;
