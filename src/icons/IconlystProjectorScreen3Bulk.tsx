import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3Bulk = ({
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
      d="M10.877 6.685H5.5a3 3 0 0 0-3 3v4.864a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V9.685a3 3 0 0 0-3-3h-1.907a4.2 4.2 0 1 1-5.716 0"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.985 8.133a.75.75 0 0 1 .75-.75 2.38 2.38 0 1 1-2.38 2.38.75.75 0 0 1 1.5 0 .88.88 0 1 0 .88-.88.75.75 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.735 4.813a4.95 4.95 0 1 0 0 9.899 4.95 4.95 0 0 0 0-9.9m-3.45 4.95a3.45 3.45 0 1 1 6.9-.001 3.45 3.45 0 0 1-6.9 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.146 10.67a.75.75 0 0 0-1.5 0v1.448a.75.75 0 0 0 1.5 0zM5.51 18.234l.195-.685h1.559l-.31 1.094a.75.75 0 0 1-1.443-.409M17.047 18.643l-.31-1.094h1.56l.194.685a.75.75 0 0 1-1.444.409"
    />
  </Svg>
);
export default IconlystProjectorScreen3Bulk;
