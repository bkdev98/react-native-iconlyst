import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletEditBulk = ({
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
      d="M14.897 11.499c0-1.82 1.47-3.29 3.28-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.43 2.44-5.43 5.44v5.149a.3.3 0 0 0 .521.202l1.58-1.721a3.64 3.64 0 0 1 5.12-.21l.77.7a3.64 3.64 0 0 1 1.16 2.54c.03.97-.32 1.9-.98 2.6l-2.203 2.418a.3.3 0 0 0 .221.502h7.371c3.023 0 5.286-2.444 5.433-5.35a.29.29 0 0 0-.293-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.268 12.19a.749.749 0 1 1 .75-.75c0 .41-.33.75-.75.75m-.09-2.48a1.786 1.786 0 0 0 0 3.57h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3zM9.283 15.295 5.74 19.169a1.2 1.2 0 0 1-.703.382H5.03l-.818.14a.17.17 0 0 1-.147-.044.16.16 0 0 1-.051-.135l.092-.85c.028-.252.134-.49.296-.675l3.573-3.903a.39.39 0 0 1 .28-.121c.092 0 .184.033.257.1l.756.7a.375.375 0 0 1 .015.532m1.603-.324a1.86 1.86 0 0 0-.601-1.311l-.757-.701a1.894 1.894 0 0 0-2.653.106l-3.59 3.92c-.377.43-.61.954-.67 1.516l-.092.849c-.057.52.129 1.025.51 1.386a1.66 1.66 0 0 0 1.428.435l.818-.14a2.7 2.7 0 0 0 1.573-.854l3.53-3.861c.343-.365.522-.842.504-1.345"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletEditBulk;
