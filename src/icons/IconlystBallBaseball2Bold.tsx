import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball2Bold = ({
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
      d="M12.762 5.876a.75.75 0 0 1 .664 1.344l-.024.012c.273.478.587.935.946 1.359l.392-.392A.75.75 0 1 1 15.8 9.26l-.392.392q.639.539 1.359.948l.012-.025a.75.75 0 0 1 1.344.665c.973.359 2.009.547 3.063.554a.286.286 0 0 0 .288-.301 9.45 9.45 0 0 0-8.967-8.967.286.286 0 0 0-.302.288 9 9 0 0 0 .556 3.062"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.846 13.296a10.6 10.6 0 0 1-3.393-.713l-.42.843a.75.75 0 0 1-1.007.335.75.75 0 0 1-.335-1.006l.405-.81a10.5 10.5 0 0 1-1.75-1.23l-.726.725a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l.727-.729a10.5 10.5 0 0 1-1.228-1.748l-.813.407a.749.749 0 1 1-.671-1.342l.835-.418a10.5 10.5 0 0 1-.698-3.6.3.3 0 0 0-.345-.295 9.43 9.43 0 0 0-5.085 2.628 9.5 9.5 0 0 0-2.635 5.084.3.3 0 0 0 .295.345c1.24.023 2.46.258 3.606.7l.42-.837a.75.75 0 0 1 1.342.67l-.409.816q.934.522 1.75 1.227l.729-.728a.75.75 0 0 1 1.06 1.06l-.727.728c.47.544.88 1.13 1.227 1.75l.814-.408a.75.75 0 0 1 .672 1.342l-.835.418c.44 1.141.674 2.36.697 3.6a.3.3 0 0 0 .345.294 9.5 9.5 0 0 0 5.085-2.626 9.43 9.43 0 0 0 2.624-5.07.3.3 0 0 0-.297-.347z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.238 18.125a.752.752 0 0 1-.999-.337.75.75 0 0 1 .335-1.007l.024-.012a9 9 0 0 0-.946-1.36l-.392.393a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.061l.392-.392a9 9 0 0 0-1.36-.947l-.011.024a.75.75 0 0 1-1.006.336.75.75 0 0 1-.338-1 9 9 0 0 0-3.062-.555.286.286 0 0 0-.288.301c.031.653.124 1.307.297 1.95a9.53 9.53 0 0 0 6.718 6.719 9.3 9.3 0 0 0 1.951.298.286.286 0 0 0 .302-.289 9.1 9.1 0 0 0-.556-3.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBaseball2Bold;
