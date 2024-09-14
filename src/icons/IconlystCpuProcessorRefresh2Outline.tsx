import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefresh2Outline = ({
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
      d="M9.285 11.25a.75.75 0 0 1 .75.75 2.214 2.214 0 0 0 3.678 1.66.75.75 0 1 1 .993 1.125A3.714 3.714 0 0 1 8.536 12a.75.75 0 0 1 .75-.75M12.25 9.785c-.562 0-1.074.209-1.465.554a.75.75 0 1 1-.992-1.125A3.714 3.714 0 0 1 15.963 12a.75.75 0 1 1-1.5 0 2.214 2.214 0 0 0-2.213-2.214"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.822 6.63c-.492.527-.8 1.308-.8 2.294v6.162c0 .983.306 1.761.797 2.288.486.52 1.207.853 2.164.853h6.537c.958 0 1.677-.333 2.16-.853.489-.525.794-1.304.794-2.288V8.924c0-.988-.305-1.769-.794-2.295-.484-.52-1.202-.854-2.16-.854H8.983c-.953 0-1.675.333-2.161.855M5.725 5.607c.799-.857 1.933-1.332 3.258-1.332h6.537c1.329 0 2.462.475 3.259 1.333.79.851 1.195 2.02 1.195 3.316v6.162c0 1.293-.405 2.46-1.196 3.31-.797.857-1.93 1.33-3.258 1.33H8.983c-1.328 0-2.462-.473-3.26-1.33-.794-.85-1.2-2.016-1.2-3.31V8.924c0-1.298.408-2.467 1.202-3.317"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.863 18.227a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75m4.774 0a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75M2.5 9.617a.75.75 0 0 1 .75-.75h2.021a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 4.766a.75.75 0 0 1 .75-.75h2.021a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M9.863 2.254a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75m4.774 0a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75M18.47 9.617a.75.75 0 0 1 .75-.75h2.03a.75.75 0 0 1 0 1.5h-2.03a.75.75 0 0 1-.75-.75m0 4.766a.75.75 0 0 1 .75-.75h2.03a.75.75 0 0 1 0 1.5h-2.03a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorRefresh2Outline;
