import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFruitDrinkBold = ({
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
      d="M17.935 2.323a.75.75 0 0 1 .357.999l-1.215 2.56h-1.66l1.52-3.203a.75.75 0 0 1 .998-.356M15.417 5.883l-1.513 3.19a.75.75 0 1 0 1.355.643l1.818-3.833h3.704a.5.5 0 0 1 .394.808l-6.83 8.726v4.83h1.33a.75.75 0 0 1 0 1.5H13.67a1 1 0 0 1-.15 0h-1.996a.75.75 0 0 1 0-1.5h1.32V15.41L6.069 6.69a.5.5 0 0 1 .395-.807z"
    />
    <Path
      fill={props.color}
      d="M6.872 9.126c.21-.03.29-.274.16-.442l-1.68-2.163a.68.68 0 0 1 .537-1.097h3.245c.189 0 .331-.173.272-.352a3.1 3.1 0 0 0-.49-.924 3.117 3.117 0 1 0-2.044 4.978"
    />
  </Svg>
);
export default IconlystFruitDrinkBold;
