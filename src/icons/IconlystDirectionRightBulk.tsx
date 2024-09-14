import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionRightBulk = ({
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
      d="m20.123 8.834-4.958-4.957c-.941-.94-2.061-1.418-3.255-1.374-1.154.04-2.267.567-3.218 1.518L4.02 8.69c-1.978 1.98-2.036 4.583-.143 6.475l4.958 4.957c.903.904 1.975 1.377 3.11 1.377l.145-.002c1.154-.041 2.268-.566 3.219-1.517l4.672-4.672c1.978-1.98 2.035-4.581.142-6.475"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.17 11.32-2.189 2.178a.75.75 0 0 1-1.059-1.063l.902-.897h-2.983a.83.83 0 0 0-.83.83v3.02a.75.75 0 0 1-1.5 0v-3.02a2.33 2.33 0 0 1 2.33-2.33h2.986l-.905-.9a.75.75 0 0 1 1.06-1.063l2.189 2.182a.7.7 0 0 1 .126.187c.01.02.026.033.034.052q.059.14.06.292a.7.7 0 0 1-.06.291c-.014.032-.04.056-.056.085-.032.054-.06.11-.104.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionRightBulk;
