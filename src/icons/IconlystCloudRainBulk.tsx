import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainBulk = ({
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
      d="M18.244 7.975a.32.32 0 0 1-.277-.267C17.651 5.82 16.134 2.89 12.5 2.89c-3.632 0-5.15 2.928-5.467 4.817a.32.32 0 0 1-.276.267c-2.39.322-4.004 2.171-4.004 4.703a4.78 4.78 0 0 0 2.819 4.349c.476.188.975.304 1.45.35a.286.286 0 0 0 .31-.29v-2.895a2.5 2.5 0 0 1 4.645-1.286c.07.117.204.184.34.17q.267-.027.535 0a.36.36 0 0 0 .34-.17 2.5 2.5 0 0 1 4.645 1.286v2.885c0 .174.148.312.32.289.36-.05.808-.149 1.297-.348a4.77 4.77 0 0 0 2.793-4.34c0-2.532-1.614-4.38-4.003-4.703"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.832 13.441a.75.75 0 0 0-.75.75v4.8a.75.75 0 0 0 1.5 0v-4.8a.75.75 0 0 0-.75-.75M12.585 14.811a.75.75 0 0 0-.75.75v4.8a.75.75 0 0 0 1.5 0v-4.8a.75.75 0 0 0-.75-.75M15.338 13.441a.75.75 0 0 0-.75.75v4.8a.75.75 0 0 0 1.5 0v-4.8a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRainBulk;
