import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRefreshOutline = ({
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
      d="M14.66 15.395h-4.8a3 3 0 0 1-1.1-.222 2.79 2.79 0 0 1-1.662-2.544 2.675 2.675 0 0 1 2.095-2.7 3.137 3.137 0 0 1 6.133 0 2.675 2.675 0 0 1 2.1 2.7 2.79 2.79 0 0 1-1.634 2.536c-.36.147-.744.226-1.133.23m-2.4-6.447a1.69 1.69 0 0 0-1.65 1.652.75.75 0 0 1-.745.75 1.19 1.19 0 0 0-1.267 1.279 1.28 1.28 0 0 0 .753 1.166q.245.095.506.1h4.8c.186-.004.37-.04.542-.11a1.27 1.27 0 0 0 .72-1.156 1.188 1.188 0 0 0-1.267-1.28.75.75 0 0 1-.744-.75 1.69 1.69 0 0 0-1.649-1.651M5.919 19.228a.7.7 0 0 1-.147-.015l-2.633-.526a.75.75 0 1 1 .295-1.47l1.9.378.376-1.883a.75.75 0 0 1 1.47.294l-.521 2.62a.75.75 0 0 1-.736.6zM18.043 9.068a.77.77 0 0 1-.437-.14.75.75 0 0 1-.294-.78l.6-2.6a.756.756 0 0 1 .9-.561l2.616.605a.75.75 0 0 1-.338 1.46l-1.886-.434-.432 1.869a.75.75 0 0 1-.73.58"
    />
    <Path
      fill={props.color}
      d="M5.945 19.062a.75.75 0 0 1-.524-.213 9.64 9.64 0 0 1 8.147-16.44.75.75 0 1 1-.22 1.485 8.14 8.14 0 0 0-6.88 13.88.75.75 0 0 1-.523 1.288M12.212 21.699q-.857 0-1.7-.152a.746.746 0 0 1-.294-1.35.76.76 0 0 1 .558-.126 8.14 8.14 0 0 0 7.3-13.667.749.749 0 1 1 1.08-1.042 9.64 9.64 0 0 1-6.94 16.337z"
    />
  </Svg>
);
export default IconlystCloudRefreshOutline;
