import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRefreshBold = ({
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
      fillRule="evenodd"
      d="M12.214 13.366c-.906 0-1.78.33-2.457.928a.75.75 0 0 0 .994 1.124 2.2 2.2 0 0 1 1.463-.553c1.222 0 2.215.995 2.215 2.216a.75.75 0 0 0 1.5 0 3.72 3.72 0 0 0-3.715-3.715M13.679 18.741A2.216 2.216 0 0 1 10 17.08a.75.75 0 0 0-1.5 0 3.713 3.713 0 0 0 6.171 2.786.75.75 0 1 0-.992-1.125"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.515 8.127a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.57 0-5.04 2.91-5.324 4.742a.21.21 0 0 1-.183.177c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.739 4.222c.496.202.948.295 1.303.338.093.011.166-.063.166-.156 0-1.591.68-3.02 1.76-4.024.034-.034.058-.074.094-.106.037-.032.08-.055.117-.086a6 6 0 0 1 .829-.572q.3-.17.62-.301.135-.053.27-.099c.237-.082.479-.153.729-.203.063-.012.127-.019.19-.029a6 6 0 0 1 .826-.075l.034-.003.014.001.014-.001a5.5 5.5 0 0 1 5.498 5.498c0 .054.044.096.097.085.275-.055.58-.138.91-.27a4.64 4.64 0 0 0 2.717-4.219c0-2.483-1.594-4.29-3.95-4.582"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRefreshBold;
