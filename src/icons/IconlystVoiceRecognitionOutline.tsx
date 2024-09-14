import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceRecognitionOutline = ({
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
      d="M15.1 2.998a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.643v1.577a.75.75 0 0 1-1.5 0V6.891a3.14 3.14 0 0 0-3.143-3.143H15.85a.75.75 0 0 1-.75-.75M6.893 3.748A3.14 3.14 0 0 0 3.75 6.891v1.577a.75.75 0 1 1-1.5 0V6.891a4.64 4.64 0 0 1 4.643-4.643h1.29a.75.75 0 1 1 0 1.5zM3 14.783a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893A4.64 4.64 0 0 1 2.25 17.11v-1.577a.75.75 0 0 1 .75-.75M21 14.783a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 0 1 0-1.5h1.29a3.14 3.14 0 0 0 3.143-3.142v-1.577a.75.75 0 0 1 .75-.75M15.155 17.484a.75.75 0 0 0 .716-.504l1.774-5.111.497 1.022a.75.75 0 0 0 .674.423H21a.75.75 0 0 0 0-1.5h-1.714l-1.082-2.227a.75.75 0 0 0-1.383.082l-1.634 4.706-2.374-7.34a.75.75 0 0 0-1.438.036l-1.468 5.447L8.48 9.587a.75.75 0 0 0-1.32-.054l-1.346 2.28H3a.75.75 0 0 0 0 1.5h3.243a.75.75 0 0 0 .645-.368l.855-1.447 1.692 3.479a.75.75 0 0 0 1.399-.133l1.33-4.94 2.285 7.061a.75.75 0 0 0 .706.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceRecognitionOutline;
