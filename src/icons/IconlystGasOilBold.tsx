import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasOilBold = ({
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
      d="M12.493 7.204h-4.1c-.537 0-.65.392-.65.72v2.33c0 .328.113.72.65.72h1.243l.698-2.025a.75.75 0 0 1 1.418.489l-.529 1.536h1.27c.537 0 .65-.392.65-.72v-2.33c0-.328-.113-.72-.65-.72M10.608 15.697a4 4 0 0 0-.663.714c-.107.169-.102.457.028.695a.69.69 0 0 0 .634.368c.358 0 .543-.2.635-.37.13-.236.136-.524.013-.716a3.7 3.7 0 0 0-.647-.691"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.643 10.254c0 1.307-.884 2.22-2.15 2.22h-4.1c-1.266 0-2.15-.913-2.15-2.22v-2.33c0-1.286.904-2.22 2.15-2.22h4.1c1.266 0 2.15.913 2.15 2.22zm-2.085 7.571a2.19 2.19 0 0 1-1.951 1.15 2.19 2.19 0 0 1-1.949-1.149c-.392-.715-.377-1.596.038-2.246.598-.866 1.467-1.432 1.504-1.456a.75.75 0 0 1 .814 0c.036.024.906.59 1.49 1.433.43.673.445 1.554.054 2.268m8.965-9.87-1.849-1.85a.749.749 0 1 0-1.06 1.06l1.629 1.63v7.22c0 .21-.169.38-.377.38a.384.384 0 0 1-.377-.38v-1.43a1.88 1.88 0 0 0-1.876-1.88h-.494v-6.26c0-2.363-1.52-3.95-3.782-3.95H7.549c-2.261 0-3.781 1.587-3.781 3.95v13.8h-.761a.75.75 0 0 0 0 1.5h14.875a.75.75 0 0 0 0-1.5h-.763v-6.04h.494c.204 0 .376.173.376.38v1.43c0 1.035.842 1.88 1.877 1.88a1.88 1.88 0 0 0 1.877-1.88v-7.53a.75.75 0 0 0-.22-.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasOilBold;
