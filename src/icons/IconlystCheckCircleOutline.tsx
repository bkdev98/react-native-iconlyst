import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckCircleOutline = ({
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
      d="M12.01 3.99A8.01 8.01 0 0 0 4 12a8.01 8.01 0 1 0 16.02 0 8.01 8.01 0 0 0-8.01-8.01M2.5 12a9.51 9.51 0 0 1 9.51-9.51A9.51 9.51 0 0 1 21.52 12a9.51 9.51 0 0 1-9.51 9.51A9.51 9.51 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.905 5.035a.75.75 0 0 1-.288 1.02c-4.608 2.58-7.49 6.769-8.864 9.351a.75.75 0 0 1-1.307.032 16.3 16.3 0 0 0-3.52-4.133.75.75 0 0 1 .968-1.146 18 18 0 0 1 3.154 3.447c1.62-2.711 4.5-6.431 8.837-8.859a.75.75 0 0 1 1.02.288"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckCircleOutline;
