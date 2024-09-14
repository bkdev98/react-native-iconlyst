import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike3Bold = ({
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
      d="M9.867 5.776c0-.811.66-1.471 1.47-1.471h2.28c.811 0 1.47.66 1.47 1.47v.14h-5.22zM8.34 12.475c.156 0 .284-.12.311-.273.177-.991.83-1.82 1.81-2.131a2.71 2.71 0 0 1 2.016.142 2.76 2.76 0 0 1 2.006-.143c.983.313 1.639 1.142 1.817 2.133a.32.32 0 0 0 .31.272h5.066a.3.3 0 0 0 .3-.3v-1.77c0-2.686-1.726-4.49-4.296-4.49h-1.093v-.14a2.974 2.974 0 0 0-2.97-2.97h-2.28a2.974 2.974 0 0 0-2.97 2.97v.14H7.271c-2.569 0-4.294 1.804-4.294 4.49v1.77a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.923 11.688a.75.75 0 0 1-.894 0 1.22 1.22 0 0 0-1.106-.19c-.775.247-.957 1.11-.738 1.798.327 1.01 1.549 1.968 2.29 2.445.746-.482 1.976-1.444 2.293-2.442.218-.69.035-1.553-.735-1.798a1.25 1.25 0 0 0-1.11.187"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.303 13.975a.32.32 0 0 0-.284.187c-.804 1.75-2.924 2.969-3.182 3.11a.756.756 0 0 1-.721.001c-.102-.055-2.357-1.307-3.194-3.112a.32.32 0 0 0-.284-.186h-5.36a.3.3 0 0 0-.3.3v2.43c0 2.686 1.724 4.49 4.293 4.49H17.68c2.571 0 4.297-1.804 4.297-4.49v-2.43a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBagLike3Bold;
