import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorChargeOutline = ({
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
      d="M12.633 8.402a.75.75 0 0 1 .272 1.025L11.85 11.25h2.1a.75.75 0 0 1 .65 1.127l-1.712 2.947a.75.75 0 0 1-1.298-.753l1.058-1.82h-2.1a.75.75 0 0 1-.649-1.127l1.71-2.948a.75.75 0 0 1 1.025-.273"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.82 6.628c-.491.527-.799 1.308-.799 2.294v6.162c0 .983.306 1.762.797 2.288.486.52 1.207.853 2.164.853h6.537c.958 0 1.677-.333 2.16-.853.49-.525.794-1.304.794-2.288V8.922c0-.988-.305-1.769-.794-2.295-.484-.52-1.202-.854-2.16-.854H8.982c-.953 0-1.675.333-2.161.855M5.725 5.605c.799-.857 1.933-1.332 3.258-1.332h6.537c1.329 0 2.462.475 3.259 1.333.79.851 1.195 2.02 1.195 3.316v6.162c0 1.293-.405 2.46-1.196 3.31-.797.857-1.93 1.33-3.258 1.33H8.982c-1.328 0-2.462-.473-3.26-1.33-.794-.85-1.2-2.016-1.2-3.31V8.922c0-1.298.408-2.467 1.202-3.317"
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
export default IconlystCpuProcessorChargeOutline;
