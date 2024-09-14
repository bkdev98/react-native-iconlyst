import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTranslateBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.72 5.657a9.42 9.42 0 0 0-6.719-2.79c-2.539 0-4.925.99-6.718 2.79-2.805 2.816-3.57 7.137-1.913 10.729.197.492.317.81.317 1.092 0 .333-.142.749-.279 1.15-.264.78-.565 1.663.08 2.309.646.649 1.53.343 2.308.075.398-.138.81-.28 1.135-.281.29 0 .656.147 1.08.318a9.516 9.516 0 0 0 10.71-1.916c3.7-3.715 3.7-9.76 0-13.476"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.318 10.495h-.584a9 9 0 0 1-.604 2.045 8 8 0 0 1-.923 1.6 5.3 5.3 0 0 0 1.804.77.75.75 0 1 1-.328 1.464 6.7 6.7 0 0 1-2.49-1.12c-.753.675-1.727 1.27-2.986 1.658a.751.751 0 0 1-.44-1.434c.95-.292 1.7-.73 2.295-1.237a8 8 0 0 1-1.109-1.556.75.75 0 0 1 1.314-.721c.204.37.47.776.807 1.167a7.1 7.1 0 0 0 1.126-2.636H8.684a.75.75 0 0 1 0-1.5h2.568V8.6a.75.75 0 0 1 1.5 0v.394h2.566a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesTranslateBulk;
