import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTrashBulk = ({
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
      d="m16.355 8.97-1.054 1.128-1.11-1.127H10.36L9.069 10.27l-1.214-1.3H4.51l.79 9.637c.066.818.415 1.549.93 2.128.031.044.054.093.095.132.017.017.04.022.06.037.67.664 1.58 1.081 2.58 1.081h2.962c.026.002.05.016.077.016.028 0 .055-.013.083-.016h.383c.029.003.055.016.083.016.027 0 .052-.014.078-.016h2.902c.92 0 1.765-.352 2.417-.924.023-.017.05-.026.073-.046.017-.016.024-.036.038-.053a3.66 3.66 0 0 0 1.137-2.354l.79-9.637zm-.966 10.4-.962 1.016h1.106c.242 0 .473-.048.69-.126zm-6.405-.175-.914.977c.274.133.575.214.894.214h1.157zm9.385-10.036-1.944 2.079 1.638 1.66zm-3.036 3.247L13.2 14.687l2.197 2.35 2.205-2.329zM14.295 18.2l-2.19-2.343-2.027 2.168 2.2 2.305zm-5.261-5.627-2.12 2.136 2.058 2.158 2.038-2.18zm-2.597.347 1.504-1.515-1.784-1.908zm7.772-1.653-1.93-1.96-2.117 2.131 1.943 2.078zm-7.317 7.21c.014.173.057.337.111.495l.875-.936-1.118-1.172zm10.518.712c.105-.22.174-.458.195-.71l.13-1.585-1.243 1.313z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.608 7.37h1.48a.8.8 0 0 1 0 1.6H4.412a.8.8 0 0 1 0-1.6h1.51a5 5 0 0 1-.071-.732A4.643 4.643 0 0 1 10.489 2c2.286 0 3.57 1.64 3.98 2.274q.255-.077.517-.104c.964-.088 1.823.18 2.491.786.65.591 1.04 1.459 1.131 2.415"
    />
  </Svg>
);
export default IconlystDeleteTrashBulk;
