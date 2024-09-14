import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashChargeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.156 21.89c-1.46 0-2.91-.33-4.26-.99a9.66 9.66 0 0 1-4.94-5.59c-.85-2.46-.69-5.1.45-7.44a9.7 9.7 0 0 1 5.58-4.95c4.44-1.53 9.35.32 11.67 4.41.2.36.08.82-.28 1.02a.75.75 0 0 1-1.02-.28 8.26 8.26 0 0 0-9.88-3.73 8.22 8.22 0 0 0-4.72 4.19 8.14 8.14 0 0 0-.38 6.29c.72 2.08 2.2 3.76 4.18 4.73a8.16 8.16 0 0 0 6.3.38 8.26 8.26 0 0 0 5.26-5.58c.11-.4.52-.63.92-.52s.63.52.52.92a9.73 9.73 0 0 1-6.21 6.6 9.8 9.8 0 0 1-3.19.54"
    />
    <Path
      fill={props.color}
      d="M20.246 8.46h-3.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.53V4.41c0-.41.34-.75.75-.75s.75.34.75.75v3.3c0 .41-.34.75-.75.75M11.956 17.388q-.195 0-.39-.06c-.52-.17-.86-.64-.86-1.19v-2.14h-1.99c-.47 0-.9-.26-1.11-.68s-.17-.92.1-1.3l3.35-4.61c.32-.44.88-.62 1.39-.45.52.17.86.64.86 1.19v2.14h1.99c.47 0 .9.26 1.11.68s.17.92-.1 1.3l-3.35 4.61c-.24.33-.62.51-1.01.51zm-2.74-4.89h2.24c.41 0 .75.34.75.75v2.12l2.6-3.58h-2.24c-.41 0-.75-.34-.75-.75v-2.12z"
    />
  </Svg>
);
export default IconlystFlashChargeOutline;
