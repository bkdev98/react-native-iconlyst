import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelKeyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.685 9.323a1.25 1.25 0 0 0-.93.415l-.905 1.009a.75.75 0 0 1-.559.25H3.768a.75.75 0 0 1 0-1.5h4.188l.682-.76.553.496-.553-.496a2.75 2.75 0 0 1 2.047-.914h3.131a2.75 2.75 0 0 1 2.048.914l.68.76h4.189a.75.75 0 0 1 0 1.5H16.21a.75.75 0 0 1-.558-.25l-.905-1.009a1.25 1.25 0 0 0-.93-.415z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.635a8.25 8.25 0 0 0-.704 16.47.75.75 0 0 1-.126 1.495c-4.997-.422-8.92-4.61-8.92-9.715 0-5.385 4.365-9.75 9.75-9.75 4.953 0 9.042 3.692 9.667 8.475a.75.75 0 1 1-1.487.194 8.25 8.25 0 0 0-8.18-7.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.094 16.82c.918 1.014 1.398 2.587 1.398 4.823a.75.75 0 0 0 1.5 0c0-2.413-.513-4.422-1.785-5.83-1.286-1.42-3.218-2.086-5.735-2.086a.75.75 0 0 0 0 1.5c2.266 0 3.719.594 4.622 1.593M12.25 13.22a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M20.25 16.51a.75.75 0 0 0-1.06 0l-.01.01a.75.75 0 0 0 1.061 1.06l.009-.008a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.383 15.528a1.87 1.87 0 0 0-1.869 1.868c0 .122.018.248.05.397a.75.75 0 0 1-.202.691l-2.037 2.036v.833h.707l.029-.031.065-.068.004-.004 1.38-1.357.537-.536a.75.75 0 0 1 .76-.183 1.873 1.873 0 0 0 2.444-1.778 1.87 1.87 0 0 0-1.869-1.868m-3.426 5.902.001-.001zm.057-4.034a3.368 3.368 0 1 1 2.795 3.32l-.245.244-1.38 1.357-.039.042-.038.04c-.036.04-.091.097-.155.154-.113.099-.368.3-.736.3h-1.323c-.59 0-1.068-.479-1.068-1.069v-1.443c0-.284.113-.555.313-.756l1.892-1.89a3 3 0 0 1-.016-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWheelKeyOutline;
