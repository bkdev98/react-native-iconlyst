import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailUploadBulk = ({
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
      d="M16.225 19.7a.213.213 0 0 0-.208-.208 2.48 2.48 0 0 1-1.66-.722 2.5 2.5 0 0 1 0-3.536l2.598-2.597a2.5 2.5 0 0 1 2.259-.685c.474.092.942.346 1.281.685l.189.188a.2.2 0 0 0 .341-.14V8.601c0-3.3-2.2-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h8.9l.114.001a.19.19 0 0 0 .193-.203 12 12 0 0 1-.007-.4"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.425 13.302q-.9 0-1.8-.6l-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.3.2.8-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6M21.855 16.472l-2.6-2.6a.75.75 0 0 0-1.06 0l-2.6 2.6a.75.75 0 1 0 1.06 1.061l1.32-1.32v4.035a.75.75 0 0 0 1.5 0v-4.035l1.32 1.32a.751.751 0 0 0 1.06-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailUploadBulk;
