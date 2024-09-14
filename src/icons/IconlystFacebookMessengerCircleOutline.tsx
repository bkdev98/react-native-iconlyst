import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookMessengerCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M13.44 15.65c-.25 0-.5-.08-.7-.22l-2.29-1.52-1.82 1.04c-.48.27-1.07.21-1.48-.17-.4-.38-.51-.97-.26-1.47l2.14-4.28c.18-.34.48-.57.83-.65.3-.09.68-.03.98.17l2.29 1.53 2.29-1.14a1.25 1.25 0 0 1 1.47.26c.38.4.44 1.01.17 1.48l-2.54 4.36c-.17.29-.46.51-.8.58-.09.02-.19.03-.28.03m-2.96-3.37c.15 0 .29.04.42.13l2.47 1.64 1.97-3.39-1.92.95c-.24.12-.53.1-.75-.05l-2.42-1.61-1.64 3.29 1.5-.86c.12-.07.24-.1.37-.1"
    />
  </Svg>
);
export default IconlystFacebookMessengerCircleOutline;
