import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageBold = ({
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
      d="m12.881 6.143 1.363-1.357a3.5 3.5 0 0 1 2.496-1.032 3.47 3.47 0 0 1 2.479 1.036 3.46 3.46 0 0 1 1.027 2.485c0 .936-.366 1.817-1.032 2.483l-1.353 1.363zm2.035 7.728-1.055 1.05a1.055 1.055 0 0 1-1.516-.006l-3.28-3.275a1.05 1.05 0 0 1-.313-.754c0-.286.112-.555.315-.755l1.053-1.058a1.08 1.08 0 0 1 1.512-.004l3.286 3.284a1.08 1.08 0 0 1-.002 1.518M9.76 19.224a3.55 3.55 0 0 1-4.983.004 3.54 3.54 0 0 1-.003-4.981l1.364-1.357 4.977 4.976zm9.162-7.043 1.354-1.365a4.97 4.97 0 0 0 1.47-3.541 4.95 4.95 0 0 0-1.468-3.547 4.96 4.96 0 0 0-3.535-1.474h-.009c-1.34 0-2.6.522-3.55 1.47L11.82 5.084l-1.181-1.181a4.73 4.73 0 0 0-3.371-1.398 4.73 4.73 0 0 0-3.372 1.398 4.784 4.784 0 0 0 0 6.747l1.181 1.18-1.364 1.359c-1.946 1.956-1.946 5.14.004 7.1a5.01 5.01 0 0 0 3.548 1.458 5.03 5.03 0 0 0 3.554-1.461l1.356-1.36 1.184 1.184a4.73 4.73 0 0 0 3.372 1.399 4.73 4.73 0 0 0 3.372-1.4 4.78 4.78 0 0 0 0-6.746z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBandageBold;
