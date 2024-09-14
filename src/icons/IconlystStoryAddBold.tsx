import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoryAddBold = ({
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
      d="M5.608 7.378c.23 0 .457-.105.604-.305.385-.52.833-1 1.333-1.423a.748.748 0 1 0-.969-1.144 9.8 9.8 0 0 0-1.57 1.677.75.75 0 0 0 .602 1.195M3.915 13.326a.75.75 0 0 0 .693-.804 8.2 8.2 0 0 1 .274-2.776.75.75 0 1 0-1.446-.397 9.7 9.7 0 0 0-.324 3.285.75.75 0 0 0 .803.692M5.25 15.275a.75.75 0 1 0-1.372.605 9.77 9.77 0 0 0 3.379 4.094.745.745 0 0 0 1.043-.189.75.75 0 0 0-.19-1.043 8.3 8.3 0 0 1-2.86-3.467M17.932 18.497a8.16 8.16 0 0 1-4.474 1.723 8.2 8.2 0 0 1-2.423-.173.75.75 0 1 0-.328 1.463 9.7 9.7 0 0 0 2.862.206 9.67 9.67 0 0 0 5.287-2.037.75.75 0 0 0-.924-1.182M11.833 14.858a1 1 0 1 0 2 0v-1.86h1.864a1 1 0 0 0 0-2h-1.864V9.137a1 1 0 0 0-2 0v1.86H9.969a1 1 0 1 0 0 2h1.864z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.446 2.258a.75.75 0 0 0-.721.777c.016.414.371.76.779.721 4.538-.165 8.394 3.383 8.57 7.93a8.15 8.15 0 0 1-1.232 4.635.75.75 0 1 0 1.272.792 9.63 9.63 0 0 0 1.459-5.486c-.208-5.372-4.74-9.59-10.127-9.369"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStoryAddBold;
