import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHideOutline = ({
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
      d="M5.37 4.803c-.534.672-.817 1.731-.817 3.253v7.986a.75.75 0 0 1-1.5 0V8.056c0-1.657.299-3.125 1.144-4.187C5.071 2.771 6.41 2.25 8.156 2.25h1.78c.868 0 1.7.397 2.23 1.11l.002.003.809 1.077c.237.319.618.51 1.037.516a.75.75 0 1 1-.02 1.5 2.8 2.8 0 0 1-2.22-1.12l-.811-1.08a1.27 1.27 0 0 0-1.028-.506h-1.78c-1.44 0-2.278.418-2.784 1.053"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.253 5.705a.75.75 0 0 1 .75-.75h.984a.75.75 0 0 1 0 1.5h-.984a.75.75 0 0 1-.75-.75m4.777.084a.75.75 0 0 1 .982-.402c.951.4 1.63 1.072 2.056 1.985.414.888.575 1.972.575 3.202v.004l-.026 4.42V15c0 1.74-.516 3.215-1.558 4.256-1.041 1.042-2.517 1.557-4.257 1.557H8.876c-1.425 0-2.678-.34-3.664-1.062a.75.75 0 0 1 .885-1.21c.67.489 1.589.772 2.779.772h6.926c1.446 0 2.502-.423 3.197-1.118.694-.694 1.118-1.75 1.118-3.197v-.004l.026-4.42v-.002c0-1.12-.15-1.957-.434-2.566A2.35 2.35 0 0 0 18.43 6.77a.75.75 0 0 1-.401-.981"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.677 3.126a.75.75 0 0 1 0 1.06L4.333 21.53a.75.75 0 1 1-1.06-1.06L20.615 3.125a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileHideOutline;
