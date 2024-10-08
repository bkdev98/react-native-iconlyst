import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebAiAltOutline = ({
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
      d="M3.74 3.898C4.725 2.84 6.127 2.25 7.782 2.25h8.436c1.66 0 3.061.59 4.045 1.648.978 1.05 1.487 2.502 1.487 4.13v4.51a.75.75 0 1 1-1.5 0v-4.51c0-1.319-.409-2.382-1.085-3.108-.67-.72-1.659-1.17-2.947-1.17H7.782c-1.284 0-2.273.45-2.945 1.17-.677.727-1.087 1.79-1.087 3.107v7.947c0 1.318.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h2.583a.75.75 0 0 1 0 1.5H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.129V8.028c0-1.628.511-3.079 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.54 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75M2.25 9.491a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M18.404 15.05a.75.75 0 0 1 .704.49l.1.274a3.01 3.01 0 0 0 1.78 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.78 1.782l-.1.274a.75.75 0 0 1-1.407 0l-.101-.274a3.01 3.01 0 0 0-1.779-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 .704-.49m-.948 3.35c.361.268.681.588.948.95.268-.362.587-.682.949-.95a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95M12.793 13.207a.75.75 0 0 1 .718.532c.142.47.51.837.978.98a.75.75 0 0 1 0 1.435c-.469.142-.836.51-.979.98a.75.75 0 0 1-1.435 0 1.47 1.47 0 0 0-.978-.98.75.75 0 0 1 0-1.435c.468-.143.835-.51.978-.98a.75.75 0 0 1 .718-.532m-.048 2.23.048.048.048-.049-.048-.048z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebAiAltOutline;
