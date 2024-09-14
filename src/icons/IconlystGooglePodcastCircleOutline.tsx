import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePodcastCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 5.766a.75.75 0 0 0-.75.75v.914a.75.75 0 0 0 1.5 0v-.914a.75.75 0 0 0-.75-.75M12.001 15.824a.75.75 0 0 0-.75.75v.915a.75.75 0 0 0 1.5 0v-.915a.75.75 0 0 0-.75-.75M12.001 8.965a.75.75 0 0 0-.75.75v4.572a.75.75 0 1 0 1.5 0V9.715a.75.75 0 0 0-.75-.75M14.744 13.996a.75.75 0 0 0-.75.75v1.372a.75.75 0 0 0 1.5 0v-1.372a.75.75 0 0 0-.75-.75M17.487 10.797a.75.75 0 0 0-.75.75v.914a.75.75 0 0 0 1.5 0v-.914a.75.75 0 0 0-.75-.75M14.744 7.137a.75.75 0 0 0-.75.75v4.572a.75.75 0 0 0 1.5 0V7.887a.75.75 0 0 0-.75-.75M9.258 7.137a.75.75 0 0 0-.75.75v1.371a.75.75 0 0 0 1.5 0V7.887a.75.75 0 0 0-.75-.75M6.514 10.797a.75.75 0 0 0-.75.75v.914a.75.75 0 0 0 1.5 0v-.914a.75.75 0 0 0-.75-.75M9.258 10.797a.75.75 0 0 0-.75.75v4.572a.75.75 0 0 0 1.5 0v-4.572a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePodcastCircleOutline;
