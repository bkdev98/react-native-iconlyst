import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOpenBold = ({
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
      d="M4.027 15.37V8.629c0-2.917 1.041-4.162 3.48-4.162h1.728c.382 0 .747.182.977.49l.79 1.05a2.75 2.75 0 0 0 2.177 1.088h1.46c1.887 0 2.86.588 3.263 2.024H12.18a3.264 3.264 0 0 0-3.168 2.549l-1.29 5.949c-.13.559-.566 1.086-1.06 1.284-.375.15-.768.098-1.167-.135-.95-.692-1.468-1.833-1.468-3.396m17.408-5.18c-.454-.55-1.15-.892-1.988-1.014-.493-2.397-2.062-3.581-4.808-3.581h-1.457a1.24 1.24 0 0 1-.982-.491l-.789-1.047a2.73 2.73 0 0 0-2.176-1.09H7.506c-3.304 0-4.979 1.905-4.979 5.662v6.74c0 1.94.69 3.45 1.883 4.429.027.035.046.074.08.104.03.026.464.39 1.27.699q.07.03.145.058a6.6 6.6 0 0 0 1.204.288c.337.05.694.088 1.095.088h9.4a3.265 3.265 0 0 0 3.172-2.566l1.176-5.788c.242-1.25-.148-2.044-.517-2.491"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileOpenBold;
