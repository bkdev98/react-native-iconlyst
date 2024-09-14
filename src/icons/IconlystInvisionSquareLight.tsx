import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInvisionSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.594 10.758h1.124l-.725 2.97c-.214.882.173 2.01 1.276 2.01h1.219a.67.67 0 0 0 .652-.507l.99-3.967a.67.67 0 0 1 .653-.506h1.219c.352 0 .663.182.9.456.363.404.445.982.394 1.504-.09.797-.597 1.668-.394 2.475.287.749 1.177.732 1.504.232M9.312 7.753v.029m.118-.023a.118.118 0 1 1-.237 0 .118.118 0 0 1 .237 0"
    />
  </Svg>
);
export default IconlystInvisionSquareLight;
