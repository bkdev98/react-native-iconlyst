import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer60Bold = ({
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
      d="M20.156 19.127a.73.73 0 0 1-1.458 0v-2.38a.73.73 0 0 1 .73-.73.73.73 0 0 1 .728.73zm-.729-5.11a2.733 2.733 0 0 0-2.729 2.73v2.38a2.733 2.733 0 0 0 2.73 2.73 2.733 2.733 0 0 0 2.728-2.73v-2.38a2.733 2.733 0 0 0-2.729-2.73M13.883 19.857a.663.663 0 0 1-.665-.66c0-.37.298-.67.665-.67s.667.3.667.67c0 .364-.299.66-.667.66m0-3.33c-.204 0-.4.028-.592.071a.7.7 0 0 1 .28-.429.83.83 0 0 1 .98.047.999.999 0 1 0 1.252-1.559 2.84 2.84 0 0 0-3.376-.129c-1.209.847-1.209 2.188-1.209 2.99v1.68a2.666 2.666 0 0 0 5.332 0 2.67 2.67 0 0 0-2.667-2.67"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.27 8.727a1 1 0 0 0 1-1v-2.99a1 1 0 0 0-2 0v.438c-2.72-2.802-6.953-3.832-10.734-2.37-5.118 1.982-7.68 7.76-5.713 12.881.95 2.468 2.816 4.43 5.255 5.524q.201.089.41.088a1 1 0 0 0 .408-1.913c-1.954-.877-3.448-2.446-4.206-4.417-1.574-4.093.476-8.713 4.568-10.298 3.091-1.197 6.558-.303 8.723 2.057h-.685a1 1 0 0 0 0 2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.162 12.097v-4.18a1 1 0 0 0-2 0v3.18H8.716a1 1 0 0 0 0 2h3.446a1 1 0 0 0 1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForwardClockTimer60Bold;
