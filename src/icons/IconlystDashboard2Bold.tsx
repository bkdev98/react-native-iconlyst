import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard2Bold = ({
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
      d="M12.982 11.439a.56.56 0 1 0 0 1.122.56.56 0 0 0 0-1.122"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 21.5c-5.238 0-9.5-4.262-9.5-9.5s4.262-9.5 9.5-9.5 9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5m-5.155-8.749a.75.75 0 0 1-.75-.75 5.91 5.91 0 0 1 5.905-5.905.75.75 0 0 1 0 1.5 4.41 4.41 0 0 0-4.405 4.405.75.75 0 0 1-.75.75m5.157 1.31A2.064 2.064 0 0 1 10.92 12a2.064 2.064 0 0 1 3.004-1.832l2.101-2.102a.749.749 0 1 1 1.06 1.06l-2.168 2.17q.121.332.123.704a2.063 2.063 0 0 1-2.06 2.061m-.002 3.844a.75.75 0 0 1 0-1.5A4.41 4.41 0 0 0 17.386 12a.75.75 0 0 1 1.5 0 5.91 5.91 0 0 1-5.905 5.905m-2.989-.955a.74.74 0 0 1-.436-.14 6 6 0 0 1-1.252-1.206.75.75 0 1 1 1.187-.917q.4.517.938.903a.75.75 0 0 1-.437 1.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard2Bold;
