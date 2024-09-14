import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayTicketBold = ({
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
      d="M14.205 13.162a10.2 10.2 0 0 1-2.98 1.87c-.962.38-1.768-.094-1.886-1.042a18.6 18.6 0 0 1 0-3.985c.129-.985 1.016-1.403 1.886-1.038a10 10 0 0 1 2.98 1.87c.743.672.759 1.627 0 2.325m6.841.502c-.088-.07-.212-.138-.755-.424a1.38 1.38 0 0 1-.752-1.243c0-.529.281-.99.789-1.258.507-.265.63-.33.718-.402.283-.228.36-.355.43-.709.024-.12.024-.245.024-.519 0-1.13 0-1.698-.148-2.209a3.73 3.73 0 0 0-2.548-2.549c-.512-.148-1.079-.148-2.21-.148H7.408c-1.129 0-1.695 0-2.205.147A3.73 3.73 0 0 0 2.65 6.906c-.147.512-.147 1.077-.146 2.23.001.267.008.402.024.487.07.357.147.484.433.714.09.072.24.152.749.421.47.248.75.711.75 1.282-.017.49-.295.94-.738 1.182-.557.306-.691.38-.782.454-.282.235-.348.347-.417.706a3 3 0 0 0-.023.515c0 1.125 0 1.69.147 2.2a3.72 3.72 0 0 0 2.555 2.554c.509.147 1.074.147 2.199.147h9.193c1.13 0 1.697 0 2.209-.149a3.72 3.72 0 0 0 2.548-2.549c.15-.513.149-1.08.148-2.209 0-.284-.006-.426-.022-.515-.071-.356-.147-.482-.431-.712"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.205 13.162a10.2 10.2 0 0 1-2.98 1.87c-.962.38-1.768-.094-1.886-1.042a18.6 18.6 0 0 1 0-3.985c.129-.985 1.016-1.403 1.886-1.038a10 10 0 0 1 2.98 1.87c.743.672.759 1.627 0 2.325m6.841.502c-.088-.07-.212-.138-.755-.424a1.38 1.38 0 0 1-.752-1.243c0-.529.281-.99.789-1.258.507-.265.63-.33.718-.402.283-.228.36-.355.43-.709.024-.12.024-.245.024-.519 0-1.13 0-1.698-.148-2.209a3.73 3.73 0 0 0-2.548-2.549c-.512-.148-1.079-.148-2.21-.148H7.408c-1.129 0-1.695 0-2.205.147A3.73 3.73 0 0 0 2.65 6.906c-.147.512-.147 1.077-.146 2.23.001.267.008.402.024.487.07.357.147.484.433.714.09.072.24.152.749.421.47.248.75.711.75 1.282-.017.49-.295.94-.738 1.182-.557.306-.691.38-.782.454-.282.235-.348.347-.417.706a3 3 0 0 0-.023.515c0 1.125 0 1.69.147 2.2a3.72 3.72 0 0 0 2.555 2.554c.509.147 1.074.147 2.199.147h9.193c1.13 0 1.697 0 2.209-.149a3.72 3.72 0 0 0 2.548-2.549c.15-.513.149-1.08.148-2.209 0-.284-.006-.426-.022-.515-.071-.356-.147-.482-.431-.712"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayTicketBold;
