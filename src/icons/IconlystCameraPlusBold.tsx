import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraPlusBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.388 17.448a3.847 3.847 0 0 1-3.844-3.843 3.847 3.847 0 0 1 3.843-3.843 3.847 3.847 0 0 1 3.843 3.843 3.847 3.847 0 0 1-3.843 3.843m2.115-12.192c-.03-.584-.477-1.09-1.062-1.096-.953-.01-2.297-.023-3.002-.023-.994 0-1.91.54-2.392 1.412-.442.805-.629 1.037-.665 1.077-.25.263-.59.415-.934.43a3.567 3.567 0 0 0-3.562 3.558v5.643a4.61 4.61 0 0 0 4.606 4.606h9.789a4.61 4.61 0 0 0 4.606-4.606q-.001-1.377-.004-2.754c0-.539-.43-.973-.96-1.062-3.522-.585-6.233-3.638-6.42-7.185"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.387 11.262a2.346 2.346 0 0 0-2.343 2.343 2.346 2.346 0 0 0 2.343 2.343 2.346 2.346 0 0 0 2.343-2.343 2.346 2.346 0 0 0-2.343-2.343M21.364 5.852H20V4.488a.75.75 0 0 0-1.5 0v1.364h-1.367a.75.75 0 0 0 0 1.5h1.367v1.365a.75.75 0 0 0 1.5 0V7.352h1.362a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraPlusBold;
