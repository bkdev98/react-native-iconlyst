import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainStopTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M20.793 13.574c1.256.642 1.912 4.298-3.205 4.602v1.723a.08.08 0 0 1-.078.08h-1.687a.08.08 0 0 1-.07-.047l-1.197-2.83c-.547.148-1.792.154-2.395-1.014-1.274 1.236-3.9.781-3.997-1.393" />
      <Path d="M3.702 9.521c-1.251 1.865-.762 4.149.927 5.175 1.123.682 2.713.584 3.534 0a3.13 3.13 0 0 0 1.125-1.514M7.486 5.545c.988-.582 2.877-1.742 5.309-1.488" />
      <Path d="M5.777 11.382c-3.9-.993-1.236-7.724 3.457-5.291M8.263 9.113c.25.412 1.077.642 1.812.434" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.63 5.126a3.68 3.68 0 1 1-5.256 5.152"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.63 5.126a3.681 3.681 0 0 0-5.256 5.152"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.63 5.125-5.257 5.152"
    />
  </Svg>
);
export default IconlystAiBrainStopTwoTone;
