import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggOutline = ({
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
      d="M10.732 7.23c.347.23.446.69.221 1.04a10.9 10.9 0 0 0-1.399 3.13.753.753 0 0 1-.917.53.755.755 0 0 1-.533-.92c.34-1.28.882-2.46 1.59-3.56a.76.76 0 0 1 1.038-.22"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.464 13.82c.035 4.01-3.355 7.62-7.66 7.91-4.3.29-8.164-2.84-8.697-7.1-.26-2.07.22-4 .95-5.81.791-1.95 1.888-3.79 3.64-5.19 1.12-.9 2.33-1.39 3.586-1.38s2.46.51 3.572 1.43c1.986 1.63 3.135 3.78 3.92 6.06.418 1.21.662 2.45.689 4.07zm-5.56-8.98v-.01c-.91-.74-1.793-1.07-2.63-1.08s-1.724.32-2.642 1.05c-1.48 1.18-2.449 2.77-3.185 4.59-.68 1.67-1.068 3.34-.852 5.06.432 3.45 3.585 6.02 7.108 5.78 3.555-.24 6.283-3.223 6.26-6.39-.023-1.47-.24-2.56-.605-3.61-.737-2.14-1.763-4.01-3.454-5.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEggOutline;
