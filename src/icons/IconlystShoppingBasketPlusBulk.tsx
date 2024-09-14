import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketPlusBulk = ({
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
      d="M18.85 8.745h-1.89l-3.09-4.06a1.15 1.15 0 0 0-.91-.46c-.36 0-.69.17-.91.46l-3.09 4.06H7.08l3.78-4.97c.5-.66 1.27-1.05 2.1-1.05.84.01 1.6.39 2.11 1.05z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.822 9.895c-.6-.76-1.58-1.15-2.9-1.15H7.012c-1.32 0-2.3.39-2.91 1.15-.65.82-.81 2.02-.45 3.53l.96 4.64c.41 2.21 2.04 3.21 3.48 3.21h9.75c1.44 0 3.07-1 3.47-3.2l.97-4.64c.35-1.52.2-2.71-.46-3.54"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.946 15.76h-1.23v1.231a.75.75 0 0 1-1.5 0V15.76h-1.232a.75.75 0 0 1 0-1.5h1.232v-1.23a.75.75 0 0 1 1.5 0v1.23h1.23a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBasketPlusBulk;
