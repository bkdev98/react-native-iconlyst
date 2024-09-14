import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowMittensBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M20.204 11.395c0 .74-.29 1.42-.8 1.94l-3.187 3.177a.32.32 0 0 1-.41.028 3.53 3.53 0 0 0-2.013-.605h-7.69c-.514 0-.988.097-1.41.273-.217.09-.48-.058-.48-.293v-7.48c0-3.07 2.5-5.57 5.57-5.57s5.57 2.5 5.57 5.57v1.22l.18-.19a2.743 2.743 0 0 1 3.87 0c.52.52.8 1.2.8 1.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.176 10.43-.894-.516.894-.516a.751.751 0 0 0-.75-1.299l-.893.515V7.582a.75.75 0 0 0-1.5 0v1.034l-.896-.517a.749.749 0 1 0-.75 1.299l.895.516-.895.517a.75.75 0 1 0 .75 1.299l.896-.518v1.033a.75.75 0 0 0 1.5 0v-1.031l.893.515a.747.747 0 0 0 1.024-.275.75.75 0 0 0-.274-1.024M13.74 19.849a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm-3.042 0a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm-3.04 0a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm6.135-2.91h-7.69c-1.338 0-2.307.87-2.307 2.069v1.286c0 1.2.968 2.07 2.305 2.07h7.692c1.337 0 2.306-.87 2.306-2.07l.001-1.286c0-1.198-.97-2.068-2.307-2.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowMittensBulk;
