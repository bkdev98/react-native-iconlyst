import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOkexBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M3 3.556C3 2.973 3.473 2.5 4.056 2.5h4.222c.583 0 1.055.473 1.055 1.056v4.222c0 .583-.472 1.055-1.055 1.055H4.056A1.056 1.056 0 0 1 3 7.778zM15.667 16.222c0-.583.472-1.055 1.055-1.055h4.222c.583 0 1.056.472 1.056 1.055v4.222c0 .583-.473 1.056-1.056 1.056h-4.222a1.056 1.056 0 0 1-1.055-1.056zM8.278 15.167c.583 0 1.055.472 1.055 1.055v4.222c0 .583-.472 1.056-1.055 1.056H4.056A1.056 1.056 0 0 1 3 20.444v-4.222c0-.583.473-1.055 1.056-1.055zM20.944 2.5c.583 0 1.056.473 1.056 1.056v4.222c0 .583-.473 1.055-1.056 1.055h-4.222a1.056 1.056 0 0 1-1.055-1.055V3.556c0-.583.472-1.056 1.055-1.056z" />
    </G>
    <Path
      fill={props.color}
      d="M9.333 9.889c0-.583.473-1.055 1.056-1.055h4.222c.583 0 1.056.472 1.056 1.055v4.222c0 .583-.473 1.056-1.056 1.056h-4.222a1.056 1.056 0 0 1-1.056-1.056z"
    />
  </Svg>
);
export default IconlystOkexBulk;
