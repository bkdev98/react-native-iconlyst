import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorOutline = ({
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
      d="M6.822 6.63c-.492.527-.8 1.308-.8 2.294v6.162c0 .983.306 1.761.797 2.288.486.52 1.207.853 2.164.853h6.537c.958 0 1.677-.333 2.16-.853.489-.525.794-1.304.794-2.288v-3.462a.75.75 0 1 1 1.5 0v3.461c0 1.294-.405 2.46-1.196 3.311-.797.857-1.93 1.33-3.258 1.33H8.983c-1.328 0-2.462-.473-3.26-1.33-.794-.85-1.2-2.016-1.2-3.31V8.924c0-1.298.408-2.467 1.202-3.317.799-.857 1.933-1.332 3.258-1.332h3.837a.75.75 0 0 1 0 1.5H8.983c-.953 0-1.675.333-2.161.855"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.305 2.725a.75.75 0 0 1 .75.75V6.16a.75.75 0 0 1-1.5 0V3.475a.75.75 0 0 1 .75-.75m.047 5.06a.75.75 0 0 1 .71.787l-.002.058a.75.75 0 0 1-1.498-.076l.003-.058a.75.75 0 0 1 .787-.71M18.47 14.383a.75.75 0 0 1 .75-.75h2.03a.75.75 0 0 1 0 1.5h-2.03a.75.75 0 0 1-.75-.75M9.863 2.254a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75M2.5 9.617a.75.75 0 0 1 .75-.75h2.021a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 4.766a.75.75 0 0 1 .75-.75h2.021a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M9.863 18.227a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75m4.774 0a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75M10.28 10.034c-.12.128-.22.345-.22.67v2.593c0 .324.1.54.22.668.113.121.297.22.592.22h2.753c.296 0 .478-.099.591-.22.118-.127.218-.343.218-.668v-.793a.75.75 0 0 1 1.5 0v.793c0 .634-.2 1.238-.62 1.69-.426.458-1.023.699-1.69.699h-2.752c-.666 0-1.263-.24-1.69-.698-.42-.452-.621-1.056-.621-1.69v-2.594c0-.637.201-1.241.623-1.693.426-.458 1.023-.698 1.688-.698h1.853a.75.75 0 0 1 0 1.5h-1.853c-.293 0-.477.098-.592.221"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorOutline;
