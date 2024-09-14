import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaturnOutline = ({
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
      d="M12.998 19.78c-4.29 0-7.78-3.49-7.78-7.78s3.49-7.78 7.78-7.78 7.78 3.49 7.78 7.78-3.49 7.78-7.78 7.78m0-14.06A6.29 6.29 0 0 0 6.718 12a6.29 6.29 0 0 0 6.28 6.28 6.29 6.29 0 0 0 6.28-6.28 6.29 6.29 0 0 0-6.28-6.28"
    />
    <Path
      fill={props.color}
      d="M5.587 18.37c-1.49 0-2.17-.54-2.48-1.08-.68-1.17.03-2.84 2.04-4.84.29-.29.77-.29 1.06 0s.29.77 0 1.06c-1.66 1.64-1.99 2.71-1.8 3.02.13.23.91.55 2.91.1 1.9-.43 4.22-1.39 6.52-2.72s4.3-2.85 5.62-4.28c1.39-1.5 1.5-2.34 1.37-2.57-.18-.32-1.27-.56-3.52.05a.75.75 0 1 1-.39-1.45c2.74-.75 4.54-.52 5.21.65.43.74.5 2.09-1.56 4.34-1.42 1.54-3.54 3.17-5.97 4.57s-4.89 2.43-6.94 2.89c-.82.18-1.49.26-2.06.26z"
    />
  </Svg>
);
export default IconlystSaturnOutline;
