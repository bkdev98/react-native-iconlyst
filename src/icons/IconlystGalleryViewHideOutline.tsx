import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewHideOutline = ({
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
      d="M5.042 5.186C4.394 5.882 4 6.9 4 8.169v7.67c0 1.268.393 2.285 1.041 2.978.642.687 1.59 1.117 2.829 1.117h3.398a.75.75 0 0 1 0 1.5H7.87c-1.607 0-2.969-.57-3.925-1.593C2.994 18.823 2.5 17.417 2.5 15.84V8.169c0-1.578.494-2.985 1.444-4.006C4.9 3.137 6.262 2.564 7.87 2.564H16c1.613 0 2.974.573 3.93 1.6.949 1.02 1.44 2.428 1.44 4.005v2.976a.75.75 0 0 1-1.5 0V8.169c0-1.269-.392-2.288-1.039-2.984-.64-.689-1.588-1.12-2.83-1.12H7.87c-1.237 0-2.186.431-2.828 1.12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.865 2.572a.75.75 0 0 1 .75.75v7.859a.75.75 0 0 1-1.5 0V3.322a.75.75 0 0 1 .75-.75m-5.835.005a.75.75 0 0 1 .75.75v17.356a.75.75 0 0 1-1.5 0V3.327a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.502 9.105a.75.75 0 0 1 .75-.75h17.364a.75.75 0 0 1 0 1.5H3.252a.75.75 0 0 1-.75-.75M2.5 14.938a.75.75 0 0 1 .75-.75h7.859a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M15.513 15.449a5.05 5.05 0 0 0-1.337 1.71 5 5 0 0 0 1.323 1.698.75.75 0 0 1-.956 1.156 6.5 6.5 0 0 1-1.881-2.576.75.75 0 0 1 0-.562 6.55 6.55 0 0 1 1.896-2.583l.002-.002a4.4 4.4 0 0 1 2.735-.997h.018a4.4 4.4 0 0 1 2.745 1.007.75.75 0 1 1-.955 1.157 2.9 2.9 0 0 0-1.8-.664c-.653.01-1.284.24-1.79.656M21.547 16.472a.75.75 0 0 1 .39.986c-.914 2.117-2.614 3.567-4.634 3.567a.75.75 0 0 1 0-1.5c1.228 0 2.493-.891 3.258-2.662a.75.75 0 0 1 .986-.391"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.2 13.265a.75.75 0 0 1 0 1.06l-6.73 6.73a.75.75 0 0 1-1.06-1.06l6.73-6.73a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewHideOutline;
