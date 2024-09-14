import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFruitDrinkOutline = ({
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
      d="M18.541 3.322a.75.75 0 0 0-1.355-.643l-1.401 2.954H9.976a3.652 3.652 0 0 0-7.257.564c0 1.206.585 2.275 1.485 2.939a.75.75 0 0 0 .89-1.207 2.15 2.15 0 1 1 3.35-2.296H6.714a.75.75 0 0 0-.593 1.21l6.975 8.976v4.427h-1.32a.75.75 0 0 0 0 1.5h1.994a1 1 0 0 0 .151 0h2.004a.75.75 0 1 0 0-1.5h-1.33v-4.423l7.028-8.978a.75.75 0 0 0-.591-1.212h-3.586zm-1.808 3.812 2.758-.001-5.643 7.21-5.603-7.21h6.713v.001h.115l-.92 1.94a.75.75 0 1 0 1.356.642z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFruitDrinkOutline;
