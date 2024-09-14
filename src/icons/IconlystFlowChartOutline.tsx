import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowChartOutline = ({
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
      d="M10.48 4.369c-.401 0-.73.326-.73.733v1.532c0 .409.329.735.73.735h4.042a.73.73 0 0 0 .728-.735V5.102a.73.73 0 0 0-.728-.733zm-2.23.733c0-1.23.995-2.233 2.23-2.233h4.042a2.23 2.23 0 0 1 2.228 2.233v1.532a2.23 2.23 0 0 1-2.228 2.235h-4.043A2.23 2.23 0 0 1 8.25 6.634zM4.98 16.869c-.401 0-.73.326-.73.733v1.532c0 .409.329.735.73.735h4.042a.73.73 0 0 0 .728-.735v-1.532a.73.73 0 0 0-.728-.733zm-2.23.733c0-1.23.995-2.233 2.23-2.233h4.042a2.23 2.23 0 0 1 2.228 2.233v1.532a2.23 2.23 0 0 1-2.228 2.235H4.979a2.23 2.23 0 0 1-2.229-2.235zM15.98 16.869c-.401 0-.73.326-.73.733v1.532c0 .409.329.735.73.735h4.042a.73.73 0 0 0 .728-.735v-1.532a.73.73 0 0 0-.728-.733zm-2.23.733c0-1.23.995-2.233 2.23-2.233h4.042a2.23 2.23 0 0 1 2.228 2.233v1.532a2.23 2.23 0 0 1-2.228 2.235h-4.043a2.23 2.23 0 0 1-2.229-2.235z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 7.369a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9 12.869c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0v-2A2.75 2.75 0 0 1 9 11.369h7a2.75 2.75 0 0 1 2.75 2.75v2a.75.75 0 0 1-1.5 0v-2c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowChartOutline;
