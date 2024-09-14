import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTransferBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.5 7.302v3.15a.3.3 0 0 1-.3.3H2.8a.3.3 0 0 1-.3-.3v-3.15c0-3.121 2.261-5.3 5.5-5.3h7.9c3.35 0 5.6 2.13 5.6 5.3M2.5 15.702v-3.15a.3.3 0 0 1 .3-.3h18.4a.3.3 0 0 1 .3.3v3.15q-.001.69-.142 1.311c-.033.143-.183.221-.326.19a.276.276 0 0 1-.224-.264v-1.891a2.5 2.5 0 0 0-3.985-2.011.36.36 0 0 1-.428 0 2.504 2.504 0 0 0-2.957-.011l-2.2 1.6a2.5 2.5 0 0 0 .91 4.458c.147.034.26.16.26.311v1.307a.3.3 0 0 1-.3.3H8c-3.29 0-5.5-2.13-5.5-5.3" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.9 6.152h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5m8.699 0h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5M7.4 16.852h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.909 21.999a.75.75 0 0 1-.75-.75V16.52l-1.01.733a.75.75 0 1 1-.882-1.213l2.2-1.6a.75.75 0 0 1 1.192.607v6.2a.75.75 0 0 1-.75.75M17.967 21.916a.75.75 0 0 0 .782-.062l2.201-1.6a.75.75 0 0 0 .165-1.047.75.75 0 0 0-1.048-.166l-1.009.734v-4.727a.75.75 0 0 0-1.5 0v6.2c0 .282.158.54.41.668"
    />
  </Svg>
);
export default IconlystServerTransferBulk;
