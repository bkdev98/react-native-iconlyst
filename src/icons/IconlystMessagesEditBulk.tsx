import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesEditBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.969 8.919a.195.195 0 0 0-.324-.05l-2.12 2.332c-.52.58-1.24.98-2.01 1.11l-.82.13c-.13.03-.27.04-.41.04-.68 0-1.33-.29-1.79-.8s-.68-1.2-.61-1.88l.09-.85c.08-.73.38-1.4.88-1.96l2.347-2.57c.09-.1.06-.259-.063-.313a9.528 9.528 0 0 0-7.475-.087 9.45 9.45 0 0 0-3.08 2.07c-2.81 2.81-3.57 7.13-1.91 10.73.19.47.31.81.31 1.09 0 .33-.14.75-.27 1.15-.27.78-.57 1.66.07 2.31.65.65 1.53.34 2.31.07.4-.14.81-.28 1.14-.28.29 0 .65.15 1.08.32 1.27.58 2.62.87 3.97.87 2.47 0 4.92-.96 6.74-2.79 2.857-2.867 3.508-7.14 1.945-10.642"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.474 9.111-.1.85c-.03.29.08.56.27.75.17.17.39.27.64.27.05 0 .11-.01.16-.01l.82-.14c.44-.07.84-.3 1.14-.63l2.64-2.89.89-.98c.43-.46.4-1.17-.06-1.6l-.75-.7c-.22-.2-.49-.3-.77-.3-.3 0-.6.12-.82.36l-.82.9-2.76 3.02c-.27.3-.44.69-.48 1.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesEditBulk;
