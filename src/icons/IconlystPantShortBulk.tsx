import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPantShortBulk = ({
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
      d="M15.022 4.672c0-.157-.115-.307-.272-.307H9.248c-.156 0-.272.151-.272.307a7.43 7.43 0 0 1-5.732 7.267.31.31 0 0 0-.24.326l.486 5.275a2.29 2.29 0 0 0 2.291 2.095h2.266a2.29 2.29 0 0 0 2.2-1.633l1.755-5.72 1.751 5.72a2.29 2.29 0 0 0 2.199 1.633h2.267c1.199 0 2.183-.9 2.291-2.094l.485-5.278a.31.31 0 0 0-.239-.326 7.43 7.43 0 0 1-5.734-7.265"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.522 4.672a5.924 5.924 0 0 0 4.305 5.716.288.288 0 0 0 .363-.255l.3-3.262a2.296 2.296 0 0 0-2.291-2.506h-2.405c-.157 0-.272.15-.272.307M7.476 4.672c0-.156-.115-.307-.272-.307H4.8c-.646 0-1.266.274-1.7.751a2.3 2.3 0 0 0-.59 1.755l.299 3.264c.016.18.189.306.363.256a5.92 5.92 0 0 0 4.303-5.719"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPantShortBulk;
