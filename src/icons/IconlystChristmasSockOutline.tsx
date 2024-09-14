import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasSockOutline = ({
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
      fillRule="evenodd"
      d="M9.435 7.638a.75.75 0 0 1 .75.75v3.944a.84.84 0 0 1-.444.74l-1.868.999a3.61 3.61 0 1 0 3.625 6.238l5.116-3.223a2.18 2.18 0 0 0 1.017-1.843V8.388a.75.75 0 1 1 1.5 0v6.855a3.68 3.68 0 0 1-1.717 3.112l-5.116 3.223a5.11 5.11 0 0 1-6.44-.816l.545-.515-.546.515c-2.311-2.45-1.662-6.427 1.309-8.014l1.52-.812V8.388a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.428 10.968a.75.75 0 0 1 .75.75v4.168a.75.75 0 1 1-1.5 0v-4.168a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.881 12.385a.75.75 0 0 1-.274 1.025l-3.61 2.084a.75.75 0 0 1-.75-1.299l3.61-2.084a.75.75 0 0 1 1.024.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.881 15.22a.75.75 0 0 0-.274-1.025l-3.61-2.084a.75.75 0 0 0-.75 1.299l3.61 2.084a.75.75 0 0 0 1.024-.274M11.101 22.087a.75.75 0 0 1-.768-.732c-.061-2.51-2.378-4.453-4.967-4.98a.75.75 0 1 1 .298-1.47c2.964.603 6.083 2.93 6.169 6.414a.75.75 0 0 1-.732.768M7.989 3.477c.502-.414 1.156-.612 1.824-.612h7.817c.669 0 1.323.198 1.825.612.515.425.83 1.05.83 1.792v1.355c0 .741-.316 1.366-.831 1.791-.502.415-1.156.613-1.825.613H9.812c-.668 0-1.322-.198-1.824-.613a2.28 2.28 0 0 1-.83-1.791V5.269c0-.742.316-1.367.83-1.792m.955 1.157a.78.78 0 0 0-.285.635l-.001 1.355c0 .288.11.49.285.635.188.155.486.269.87.269h7.816c.384 0 .682-.114.87-.27a.78.78 0 0 0 .285-.634l.001-1.355a.78.78 0 0 0-.285-.635c-.188-.155-.486-.27-.87-.27H9.813c-.383 0-.681.115-.869.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.72 2.865a.75.75 0 0 1 .75.75V5.33a.75.75 0 0 1-1.5 0V3.615a.75.75 0 0 1 .75-.75M10.647 2.865a.75.75 0 0 1 .75.75V5.33a.75.75 0 0 1-1.5 0V3.615a.75.75 0 0 1 .75-.75M16.797 2.865a.75.75 0 0 1 .75.75V5.33a.75.75 0 0 1-1.5 0V3.615a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasSockOutline;
