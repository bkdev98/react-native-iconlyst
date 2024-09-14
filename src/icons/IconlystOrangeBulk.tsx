import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeBulk = ({
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
      d="M16.46 2.955c1.088-1.09 2.865-.875 3.718.362 3.162 4.586 2.706 10.909-1.372 14.991-4.079 4.073-10.405 4.53-14.989 1.373-1.237-.853-1.452-2.63-.362-3.72z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.805 9.9a.747.747 0 0 1 .75-.732h10.944a.75.75 0 0 1 0 1.5h-9.132l6.508 6.499a.75.75 0 0 1-1.06 1.061l-6.585-6.576-.407 9.362a.75.75 0 1 1-1.498-.065z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOrangeBulk;
