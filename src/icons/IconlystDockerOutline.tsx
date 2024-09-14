import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDockerOutline = ({
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
      d="M16.4 8.3a.75.75 0 0 1 1.016-.22c.675.416 1.365 1.033 1.709 1.886a4 4 0 0 1 2.28.66.75.75 0 0 1 .27.959c-.33.68-.766 1.248-1.371 1.635-.476.305-1.014.471-1.61.523-1.232 2.693-3.57 5.3-6.553 6.048h-.002c-2.261.561-5.362.753-7.541-.93-.947-.721-1.587-1.89-1.953-3.068-.369-1.187-.494-2.495-.313-3.583a.75.75 0 0 1 .739-.628H8q3.735.003 7.469-.003.087-.004.174-.015c-.31-1.203.19-2.42.757-3.263m.86 1.543c-.273.653-.293 1.282.029 1.788a.75.75 0 0 1-.293 1.07 3.6 3.6 0 0 1-1.508.378q-3.745.006-7.492.003H3.753c-.022.7.087 1.5.325 2.266.315 1.016.824 1.86 1.43 2.32l.005.004c1.61 1.245 4.108 1.198 6.264.664 2.524-.634 4.661-3.024 5.723-5.61a.75.75 0 0 1 .706-.465c.581.009.984-.109 1.289-.304q.225-.142.429-.385a2.6 2.6 0 0 0-1.226-.062.75.75 0 0 1-.869-.63c-.056-.38-.257-.728-.57-1.037"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.004 16.473a.75.75 0 0 1 .075 1.058c-.638.735-1.447 1.139-2.182 1.337-.723.195-1.43.206-1.918.102a.75.75 0 1 1 .312-1.467c.225.048.688.059 1.216-.084.516-.139 1.039-.41 1.439-.871a.75.75 0 0 1 1.058-.075M6.407 6.688a.75.75 0 0 1 .53-.22h5.031a.75.75 0 0 1 0 1.5h-4.28v4.03a.75.75 0 0 1-1.5 0v-4.78a.75.75 0 0 1 .22-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.877 9.235a.75.75 0 0 1 .53-.22h10.124a.75.75 0 0 1 .75.75v2.231a.75.75 0 1 1-1.5 0v-1.48H5.157v1.48a.75.75 0 0 1-1.5 0v-2.23a.75.75 0 0 1 .22-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.719 4.559a.75.75 0 0 1 .75-.75h2.53a.75.75 0 0 1 .75.75v7.439a.75.75 0 1 1-1.5 0v-6.69h-1.03v6.69a.75.75 0 1 1-1.5 0zM9.251 15.047a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDockerOutline;
