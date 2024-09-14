import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareClockOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.659 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.947c0 1.628-.51 3.078-1.488 4.129-.984 1.057-2.387 1.648-4.046 1.648H8.032c-1.66 0-3.062-.591-4.046-1.648C3.008 19.05 2.5 17.6 2.5 15.973V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.947c0 1.318.408 2.38 1.084 3.107.67.72 1.659 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.026c0-1.317-.41-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25A.75.75 0 0 1 13 3v1.476a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M2.5 12a.75.75 0 0 1 .75-.75h1.476a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 12m16.524 0a.75.75 0 0 1 .75-.75h1.476a.75.75 0 0 1 0 1.5h-1.476a.75.75 0 0 1-.75-.75m-6.774 6.774a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.476a.75.75 0 0 1 .75-.75M12.248 7.002a.75.75 0 0 1 .75.75v3.817l2.934 1.75a.75.75 0 0 1-.769 1.288l-3.3-1.968a.75.75 0 0 1-.365-.644V7.752a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareClockOutline;
