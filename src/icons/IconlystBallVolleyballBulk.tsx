import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallVolleyballBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 12c0 1.41-.31 2.75-.86 3.96a9.4 9.4 0 0 1-.87 1.51 9.7 9.7 0 0 1-3.35 2.94c-.73.39-1.52.68-2.35.86-.66.15-1.36.23-2.07.23-3.12 0-5.9-1.51-7.64-3.84-.34-.47-.65-.97-.91-1.5A9.5 9.5 0 0 1 2.5 12v-.16c.02-.85.14-1.67.37-2.45 1.05-3.68 4.26-6.45 8.17-6.84.32-.03.64-.05.96-.05.27 0 .54.01.81.04 1.56.13 3.02.63 4.27 1.43.71.46 1.36 1 1.94 1.62v.01A9.48 9.48 0 0 1 21.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.68 12.841c-1.38.05-2.68.43-3.84 1.08 1.79 3.29 4.93 5.69 8.58 6.49-.73.39-1.52.68-2.35.86a14.65 14.65 0 0 1-7.47-6.5 8.2 8.2 0 0 0-2.24 2.89c-.34-.47-.65-.97-.91-1.5 1.71-2.87 4.75-4.68 8.14-4.81.65-1.22.97-2.54.99-3.86-3.82-.1-7.54 1.49-10.08 4.35.02-.85.14-1.67.37-2.45 2.66-2.24 6.09-3.45 9.59-3.4a8.3 8.3 0 0 0-1.42-3.44c.32-.03.64-.05.96-.05.27 0 .54.01.81.04 1.65 2.91 1.7 6.46.12 9.47a8.26 8.26 0 0 0 2.85 2.79c1.98-3.23 2.48-7.22 1.3-10.83.71.46 1.36 1 1.94 1.62v.01c.55 3.37-.11 6.89-1.88 9.85 1.1.41 2.29.59 3.5.51a9.4 9.4 0 0 1-.87 1.51c-3.28-.08-6.31-1.8-8.09-4.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallVolleyballBulk;
