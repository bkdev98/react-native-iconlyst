import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingPaletteBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.522 11.407a.97.97 0 0 1-.968-.967.97.97 0 0 1 .968-.968.97.97 0 0 1 .968.968.97.97 0 0 1-.968.967m-3.52-3.627a.969.969 0 0 1 0-1.935.969.969 0 0 1 0 1.935M9.382 8.872a.968.968 0 1 1 .001-1.935.968.968 0 0 1 0 1.935m-2.545 4.104a.969.969 0 0 1 0-1.936.968.968 0 0 1 0 1.936m12.84-7.012C18.066 4.03 15.52 2.96 12.51 2.952h-.028c-5.104 0-8.863 3.2-9.58 8.158-.407 2.81.516 5.66 2.534 7.82 1.814 1.942 4.247 3.022 6.763 3.022q.33 0 .661-.024c.877-.067 1.556-.43 1.91-1.026.35-.585.354-1.326.014-2.085-.21-.47-.406-1.13-.135-1.604.248-.434.827-.584 1.27-.634 2.064-.23 3.741-1.134 4.718-2.547 1.72-2.48.82-5.937-.959-8.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaintingPaletteBold;
