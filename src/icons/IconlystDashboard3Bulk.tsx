import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard3Bulk = ({
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
      d="M3.48 12c0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5-9.5 4.262-9.5 9.5"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.98 5.562a.75.75 0 0 1-.75-.75V2.529a9.6 9.6 0 0 1 1.5 0v2.283a.75.75 0 0 1-.75.75M19.201 4.826l-1.593 1.593a.75.75 0 1 0 1.061 1.06l1.585-1.584a9.6 9.6 0 0 0-1.053-1.07M22.459 11.357h-2.184a.75.75 0 0 0 0 1.5h2.167a9.6 9.6 0 0 0 .017-1.5M20.154 18.221l-1.657-1.657a.75.75 0 1 0-1.061 1.06l1.65 1.65q.575-.485 1.068-1.053M6.876 19.274l1.65-1.65a.75.75 0 0 0-1.06-1.06l-1.66 1.657q.495.568 1.07 1.053M3.519 12.857h2.41a.75.75 0 0 0 0-1.5H3.502a9.6 9.6 0 0 0 .017 1.5M5.708 5.895 7.292 7.48a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.061L6.76 4.825q-.568.494-1.052 1.07"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.981 15.976c-1.208 0-1.921-.573-2.306-1.053-.669-.835-.803-1.946-.639-2.676.256-1.144 1.341-2.763 2.47-3.686a.75.75 0 0 1 .95-.001c1.129.923 2.214 2.543 2.47 3.687.164.73.03 1.84-.639 2.676-.385.48-1.098 1.053-2.306 1.053m0-5.812c-.744.778-1.347 1.809-1.481 2.41-.083.37.01.99.346 1.41.265.332.636.492 1.135.492s.87-.16 1.135-.491c.336-.42.429-1.04.346-1.41-.134-.602-.737-1.634-1.481-2.411"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard3Bulk;
