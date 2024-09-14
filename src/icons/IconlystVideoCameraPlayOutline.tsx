import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraPlayOutline = ({
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
      d="M7.87 10.273a16.4 16.4 0 0 0 0 3.454c.03.232.127.325.192.361.067.039.221.083.486-.022a8.4 8.4 0 0 0 2.462-1.56c.21-.196.267-.379.266-.512 0-.134-.06-.314-.264-.5l-.003-.003A8.3 8.3 0 0 0 8.54 9.929l-.006-.002c-.213-.09-.37-.063-.458-.017-.076.04-.176.134-.207.363m1.248-1.728c-.57-.242-1.205-.245-1.743.04-.549.29-.907.835-.993 1.5l-.002.014a18 18 0 0 0 0 3.79l.001.016c.078.627.398 1.18.94 1.488.54.306 1.183.304 1.784.066l.006-.003a10 10 0 0 0 2.913-1.844l.004-.004c.473-.439.751-1.008.748-1.622-.003-.612-.286-1.173-.75-1.598a9.8 9.8 0 0 0-2.908-1.843"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.731 20.001H5.942a4.45 4.45 0 0 1-4.6-4.8v-6.4a4.5 4.5 0 0 1 4.6-4.8h6.79a4.5 4.5 0 0 1 4.6 4.8v6.4a4.5 4.5 0 0 1-4.601 4.8m-6.789-14.5a3 3 0 0 0-3.1 3.3v6.4a2.97 2.97 0 0 0 3.1 3.3h6.789a2.97 2.97 0 0 0 3.1-3.3v-6.4a2.97 2.97 0 0 0-3.1-3.3z"
    />
    <Path
      fill={props.color}
      d="M20.794 17.843a2 2 0 0 1-1.3-.463l-3.392-2.787a.75.75 0 1 1 .95-1.159l3.395 2.787a.44.44 0 0 0 .342.122.54.54 0 0 0 .542-.54l.012-7.6a.54.54 0 0 0-.884-.419l-3.407 2.788a.75.75 0 1 1-.95-1.16l3.407-2.789a2.04 2.04 0 0 1 3.334 1.583l-.012 7.6a2.04 2.04 0 0 1-2.04 2.037z"
    />
  </Svg>
);
export default IconlystVideoCameraPlayOutline;
