import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchToolOutline = ({
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
      d="M6.843 3.463a7.302 7.302 0 0 1 9.95 9.243l4.309 4.31a3.067 3.067 0 0 1-4.337 4.336l-4.31-4.31a7.302 7.302 0 0 1-9.242-9.95.75.75 0 0 1 1.207-.206l3.451 3.45 1.816-.4.4-1.815-3.451-3.45a.75.75 0 0 1 .207-1.208m1.682.975 2.72 2.72c.3.301.428.736.336 1.152l-.464 2.105a1.25 1.25 0 0 1-.952.952l-2.105.464a1.25 1.25 0 0 1-1.153-.337l-2.72-2.72a5.803 5.803 0 0 0 8.116 6.701.75.75 0 0 1 .853.146l4.67 4.67a1.566 1.566 0 1 0 2.215-2.215l-4.67-4.67a.75.75 0 0 1-.146-.853 5.802 5.802 0 0 0-6.7-8.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWrenchToolOutline;
