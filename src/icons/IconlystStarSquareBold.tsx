import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareBold = ({
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
      d="m16.362 20.394-3.025-5.74a.23.23 0 0 0-.266-.116c-.647.188-2.825.91-3.276 1.06a.2.2 0 0 0-.126.11l-2.467 4.686c-.2.37-.06.82.31 1.01.37.2.82.06 1.01-.31l2.395-4.54c.03-.058.115-.037.115.027v4.133a.749.749 0 1 0 1.5 0v-4.122c0-.064.086-.085.115-.029l2.385 4.531c.14.25.4.4.67.4a.752.752 0 0 0 .66-1.1M4.447 13.697l-.193-.53a3.6 3.6 0 0 1-.207-1.28l-1.453.533c-.717.262-1.205.99-1.07 1.742a1.56 1.56 0 0 0 2.065 1.202l1.516-.555a3.6 3.6 0 0 1-.658-1.112M10.778 12.235l-.735-2.024a3.5 3.5 0 0 1-.187-1.627c.014-.12-.095-.212-.208-.17l-2.891 1.05a2.62 2.62 0 0 0-1.565 3.356l.195.535A2.59 2.59 0 0 0 6.74 14.83a2.61 2.61 0 0 0 1.999.084l2.89-1.05c.113-.042.137-.183.05-.265a3.54 3.54 0 0 1-.902-1.364M22.408 9.133l-1.461-4.02a1.55 1.55 0 0 0-.807-.878 1.55 1.55 0 0 0-1.19-.05l-6.405 2.33a2.6 2.6 0 0 0-1.478 1.356 2.6 2.6 0 0 0-.086 1.994l.737 2.03a2.614 2.614 0 0 0 3.354 1.559l6.405-2.33a1.557 1.557 0 0 0 .93-1.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarSquareBold;
