import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingPlay2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.915 13.326a.75.75 0 0 0 .693-.804 8.2 8.2 0 0 1 .274-2.776.75.75 0 1 0-1.446-.397 9.7 9.7 0 0 0-.324 3.285.75.75 0 0 0 .803.692M5.61 7.378a.75.75 0 0 0 .604-.305A8.4 8.4 0 0 1 7.547 5.65a.748.748 0 1 0-.969-1.144 10 10 0 0 0-1.57 1.677.75.75 0 0 0 .602 1.195M5.25 15.275a.75.75 0 1 0-1.372.605 9.77 9.77 0 0 0 3.379 4.094.745.745 0 0 0 1.043-.189.75.75 0 0 0-.19-1.043 8.3 8.3 0 0 1-2.86-3.467M17.932 18.497a8.16 8.16 0 0 1-4.474 1.723 8.2 8.2 0 0 1-2.423-.173.75.75 0 1 0-.328 1.463 9.7 9.7 0 0 0 2.862.206 9.67 9.67 0 0 0 5.287-2.037.75.75 0 0 0-.924-1.182M12.446 2.258a.75.75 0 0 0-.721.777c.016.414.373.76.779.721 4.519-.165 8.394 3.383 8.57 7.93a8.15 8.15 0 0 1-1.232 4.635.75.75 0 1 0 1.272.792 9.63 9.63 0 0 0 1.459-5.486c-.208-5.372-4.737-9.59-10.127-9.369" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.037 15.374a1.7 1.7 0 0 0 .874.233c.264 0 .54-.054.82-.165a10.4 10.4 0 0 0 3.052-1.933l.004-.003c.457-.426.708-.964.708-1.514-.001-.551-.252-1.087-.71-1.511a10.1 10.1 0 0 0-3.047-1.921c-.572-.245-1.181-.222-1.668.055-.478.275-.783.757-.862 1.368a19 19 0 0 0 0 4.037c.074.599.368 1.08.829 1.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingPlay2Bulk;
