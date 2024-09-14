import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramCircleOutline = ({
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
      d="m14.997 9.197-1.2 5.653-1.72-1.271a.75.75 0 0 0-.97.066l-.643.626-.549-1.808a.75.75 0 0 0-.494-.498l-.885-.277zm.037-1.622A1.165 1.165 0 0 1 16.593 8.9l-1.396 6.577a1.29 1.29 0 0 1-2.03.77h-.001l-1.468-1.084-.716.696a1.055 1.055 0 0 1-1.74-.45v-.002l-.646-2.13-1.804-.563c-.924-.288-.976-1.587-.063-1.937h.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelegramCircleOutline;
