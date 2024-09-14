import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserBulk = ({
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
      fillRule="evenodd"
      d="M19.82 11.105a3.13 3.13 0 0 0 0-4.416l-3.224-3.224a3.117 3.117 0 0 0-4.405 0L8.167 7.49a.326.326 0 0 0 0 .46l7.17 7.179a.326.326 0 0 0 .46 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.105 12.837a3.13 3.13 0 0 0 0 4.417l3.224 3.223a3.117 3.117 0 0 0 4.405 0l4.023-4.023a.325.325 0 0 0 0-.46L7.59 8.814a.326.326 0 0 0-.46 0z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.923 20.696a.75.75 0 0 1 .75-.75H18.82a.75.75 0 1 1 0 1.5H3.673a.75.75 0 0 1-.75-.75M22.056 16.506h-3.365a.75.75 0 0 0 0 1.5h3.365a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEraserBulk;
