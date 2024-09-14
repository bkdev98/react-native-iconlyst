import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkSquareOutline = ({
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
      d="M16.21 21.754H7.78c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M12.85 12.914a.751.751 0 0 1-.02-1.5c.32 0 .7-.04 1.05-.16.44-.16.85-.46 1.27-.92.42-.47.79-1.03 1.11-1.67.18-.37.63-.52 1-.34s.52.63.34 1c-.37.76-.82 1.44-1.33 2.01-.58.65-1.2 1.09-1.88 1.34-.56.2-1.1.23-1.51.25h-.02z"
    />
    <Path
      fill={props.color}
      d="M16.92 16.086c-.28 0-.54-.15-.67-.42-.31-.64-.69-1.2-1.11-1.67-.42-.46-.84-.77-1.27-.93-.27-.1-.6-.14-1.03-.15h-.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.63c.42 0 .96.04 1.53.24.68.25 1.29.68 1.88 1.34.51.58.96 1.25 1.34 2.01.18.37.03.82-.34 1a.8.8 0 0 1-.33.08z"
    />
    <Path
      fill={props.color}
      d="M12.19 16.074c-4.12 0-5.9-4.69-5.9-7.08 0-.41.34-.75.75-.75s.75.34.75.75c0 1.13.89 4.92 3.65 5.51v-4.76h-.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.27c.41 0 .75.34.75.75v6.33c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystVkSquareOutline;
