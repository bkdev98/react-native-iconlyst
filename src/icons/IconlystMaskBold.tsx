import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaskBold = ({
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
      d="M18.009 14.777a9.5 9.5 0 0 0 .488-1.38c.006-.023.566-2.218.576-3.78.832.443 1.208 1.075 1.175 2.672-.028 1.765-1.341 2.374-2.239 2.488m-3.401-3.715a1 1 0 0 1-.126-.011 15 15 0 0 0-4.97 0 .751.751 0 0 1-.246-1.48 16.5 16.5 0 0 1 5.465 0 .751.751 0 0 1-.123 1.49m-1.401 3.232a8.8 8.8 0 0 0-2.42 0 .751.751 0 0 1-.203-1.486 10.4 10.4 0 0 1 2.828 0 .75.75 0 1 1-.205 1.486m-9.455-2.01c-.033-1.607.349-2.236 1.178-2.672.01 1.565.558 3.733.564 3.754.097.379.255.875.491 1.41-.884-.11-2.205-.716-2.233-2.491m15.295-4.323-.342-.116c-.814-1.8-3.045-2.706-6.688-2.654-4.303-.076-6.09 1.203-6.748 2.662l-.347.119c-1.643.639-2.725 1.623-2.67 4.34.041 2.583 2.034 3.962 3.961 3.988l.667.027c.983 1.319 2.567 2.485 5.105 2.485h.034c2.527 0 4.109-1.167 5.093-2.484l.655-.027c1.947-.027 3.94-1.406 3.981-3.985.055-2.721-1.027-3.705-2.701-4.355"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMaskBold;
