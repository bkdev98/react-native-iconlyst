import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAddOutline = ({
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
      d="M2.83 16.953a.75.75 0 0 1 .75-.75h5.366a.75.75 0 0 1 0 1.5H3.579a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.262 13.523a.75.75 0 0 1 .75.75v5.367a.75.75 0 0 1-1.5 0v-5.367a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.865 6.042C4.33 6.616 4 7.464 4 8.531v3.293a.75.75 0 1 1-1.5 0V8.531c0-1.376.43-2.612 1.267-3.511.842-.905 2.04-1.407 3.448-1.407h10.07c1.404 0 2.602.502 3.445 1.407.838.898 1.27 2.134 1.27 3.51v6.588c0 1.375-.43 2.611-1.267 3.51-.843.905-2.04 1.407-3.448 1.407h-5.412a.75.75 0 0 1 0-1.5h5.412c1.037 0 1.821-.36 2.35-.93.535-.573.865-1.421.865-2.487V8.53c0-1.066-.331-1.914-.867-2.489-.53-.568-1.315-.929-2.348-.929H7.215c-1.037 0-1.821.361-2.35.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.656a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdAddOutline;
