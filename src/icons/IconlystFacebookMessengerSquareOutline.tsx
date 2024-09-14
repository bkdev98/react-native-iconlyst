import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookMessengerSquareOutline = ({
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
      d="M16.21 21.75H7.78c-3.31 0-5.53-2.32-5.53-5.78V8.02c0-3.45 2.22-5.77 5.53-5.77h8.44c3.31 0 5.53 2.32 5.53 5.77v7.95c0 3.46-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.27v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.02c0-2.59-1.58-4.27-4.03-4.27H7.77z"
    />
    <Path
      fill={props.color}
      d="M13.52 15.82c-.27 0-.52-.08-.74-.24l-2.43-1.61-1.95 1.11c-.47.28-1.1.21-1.51-.18a1.28 1.28 0 0 1-.26-1.51l2.26-4.52c.15-.32.45-.57.81-.67.41-.09.77-.01 1.06.19L13.19 10l2.44-1.22c.49-.26 1.11-.15 1.5.27s.46 1.02.17 1.51l-2.69 4.61a1.29 1.29 0 0 1-1.11.64zm.11-1.48h.01zm-3.25-2.01c.15 0 .29.04.42.13l2.65 1.76 2.19-3.75-2.16 1.08c-.24.12-.53.1-.75-.05l-2.61-1.73-1.82 3.64 1.71-.98c.12-.07.24-.1.37-.1"
    />
  </Svg>
);
export default IconlystFacebookMessengerSquareOutline;
