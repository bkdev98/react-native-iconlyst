import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeaSunnyOutline = ({
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
      d="M12.555 2.25a.75.75 0 0 1 .75.75v1.372a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m6.894 2.855a.75.75 0 0 1 0 1.061l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97a.75.75 0 0 1 1.06 0M5.66 5.106a.75.75 0 0 1 1.06 0l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97a.75.75 0 0 1 0-1.06M2.805 12a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5H3.555a.75.75 0 0 1-.75-.75m16.628 0a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5h-1.372a.75.75 0 0 1-.75-.75M12.554 7.674a4.353 4.353 0 0 0-2.893 7.606.75.75 0 1 1-.997 1.12 5.853 5.853 0 1 1 7.726.047.75.75 0 1 1-.984-1.131 4.353 4.353 0 0 0-2.852-7.642"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.565 17.037a2.74 2.74 0 0 0-2.82 0 4.24 4.24 0 0 1-4.38 0 2.74 2.74 0 0 0-2.82 0 4.24 4.24 0 0 1-4.38 0 .75.75 0 0 1 .78-1.282 2.74 2.74 0 0 0 2.82 0l.39.641-.39-.64a4.24 4.24 0 0 1 4.38 0l-.39.64.39-.64a2.74 2.74 0 0 0 2.82 0 4.24 4.24 0 0 1 4.38 0 2.74 2.74 0 0 0 2.82 0 .75.75 0 0 1 .78 1.28 4.24 4.24 0 0 1-4.38 0M17.565 21.14a2.74 2.74 0 0 0-2.82 0 4.24 4.24 0 0 1-4.38 0 2.74 2.74 0 0 0-2.82 0 4.24 4.24 0 0 1-4.38 0 .75.75 0 0 1 .78-1.28 2.74 2.74 0 0 0 2.82 0l.39.64-.39-.64a4.24 4.24 0 0 1 4.38 0l-.39.64.39-.64a2.74 2.74 0 0 0 2.82 0 4.24 4.24 0 0 1 4.38 0 2.74 2.74 0 0 0 2.82 0 .75.75 0 0 1 .78 1.28 4.24 4.24 0 0 1-4.38 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSeaSunnyOutline;
