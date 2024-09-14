import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInputOutline = ({
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
      d="M2.25 4.547a.75.75 0 0 1 .75-.75h3.975a.75.75 0 0 1 0 1.5H5.738v13.406h1.237a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.238V5.297H3a.75.75 0 0 1-.75-.75M13.201 9.892a.75.75 0 0 0-.703.49l-.158.426a5.12 5.12 0 0 1-3.02 3.025l-.425.158a.75.75 0 0 0 0 1.406l.425.158a5.12 5.12 0 0 1 3.02 3.025l.158.426a.75.75 0 0 0 1.407 0l.157-.426a5.12 5.12 0 0 1 3.02-3.025l.426-.158a.75.75 0 0 0 0-1.407l-.425-.157a5.12 5.12 0 0 1-3.02-3.025l-.158-.426a.75.75 0 0 0-.704-.49m2.23 4.802a6.6 6.6 0 0 0-2.23 2.232 6.6 6.6 0 0 0-2.23-2.232 6.6 6.6 0 0 0 2.23-2.233 6.6 6.6 0 0 0 2.23 2.233M18.853 4.714a.75.75 0 0 0-.717.532 2.48 2.48 0 0 1-1.648 1.65.75.75 0 0 0 0 1.435c.789.24 1.407.86 1.648 1.651a.75.75 0 0 0 1.435 0c.24-.791.858-1.41 1.648-1.65a.75.75 0 0 0 0-1.436 2.48 2.48 0 0 1-1.648-1.65.75.75 0 0 0-.718-.532m.58 2.9a4 4 0 0 0-.58.58 4 4 0 0 0-.58-.58q.32-.26.58-.581.26.32.58.58"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInputOutline;
