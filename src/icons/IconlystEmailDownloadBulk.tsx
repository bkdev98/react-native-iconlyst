import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDownloadBulk = ({
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
      d="M14.407 15.807a2.47 2.47 0 0 1 1.66-.722.213.213 0 0 0 .208-.208v-.402a2.5 2.5 0 0 1 2.5-2.5c.67 0 1.273.267 1.719.697.15.145.481.044.481-.164V8.675c.1-3.3-2.1-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h7.982a.2.2 0 0 0 .141-.341l-.691-.69a2.5 2.5 0 0 1 0-3.537"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.475 13.375q-.9 0-1.8-.6l-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.3.1.8-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6M21.905 17.045a.75.75 0 0 0-1.06 0l-1.32 1.32v-3.999a.75.75 0 0 0-1.5 0v4l-1.32-1.32a.75.75 0 1 0-1.06 1.06l2.6 2.6a.75.75 0 0 0 1.06 0l2.6-2.6a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailDownloadBulk;
