import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenOutline = ({
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
      d="M3.993 3.898C4.977 2.84 6.38 2.25 8.033 2.25h4.532a.75.75 0 0 1 0 1.5H8.033c-1.283 0-2.27.45-2.942 1.17-.677.726-1.087 1.79-1.087 3.106v7.947c0 1.318.409 2.381 1.084 3.107.67.72 1.658 1.17 2.945 1.17h8.434c1.29 0 2.277-.45 2.946-1.17.675-.726 1.083-1.788 1.083-3.107v-4.537a.75.75 0 0 1 1.5 0v4.537c0 1.627-.507 3.078-1.484 4.129-.983 1.057-2.385 1.648-4.045 1.648H8.033c-1.658 0-3.06-.591-4.043-1.648-.978-1.05-1.486-2.501-1.486-4.13V8.027c0-1.628.51-3.078 1.49-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.068 3.155a.75.75 0 0 1 .045 1.06l-8.852 9.637a.75.75 0 1 1-1.104-1.014l8.85-9.638a.75.75 0 0 1 1.06-.045"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenOutline;
