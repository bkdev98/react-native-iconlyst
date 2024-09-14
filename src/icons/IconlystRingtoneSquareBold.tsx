import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquareBold = ({
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
      d="M15.63 12.98c-.07.77-.52.98-3.63.98-3.06 0-3.55-.21-3.62-.95.01-.52.14-.74.33-1.08.27-.47.61-1.05.61-2.25 0-1 .95-2.44 2.68-2.44s2.69 1.44 2.69 2.44c0 1.2.33 1.78.6 2.25.2.34.34.57.34 1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 15.46c-2.64 0-4.92 0-5.12-2.36v-.06c0-.94.3-1.45.53-1.86.23-.39.41-.7.41-1.5 0-1.91 1.68-3.94 4.18-3.94 2.51 0 4.19 2.03 4.19 3.94 0 .8.18 1.11.4 1.5.24.41.54.92.54 1.86-.2 2.42-2.48 2.42-5.13 2.42m1.26 2.42h-2.51a.749.749 0 1 1 0-1.5h2.51a.749.749 0 1 1 0 1.5M16.22 2.5H7.78C4.62 2.5 2.5 4.72 2.5 8.03v7.95c0 3.3 2.12 5.52 5.28 5.52h8.44c3.16 0 5.28-2.22 5.28-5.52V8.03c0-3.31-2.12-5.53-5.28-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSquareBold;
