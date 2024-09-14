import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerErrorBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path
        fillRule="evenodd"
        d="M8 2.5h7.9c3.35 0 5.6 2.13 5.6 5.3v3.25a.2.2 0 0 1-.2.2H2.7a.2.2 0 0 1-.2-.2V7.8c0-3.12 2.27-5.3 5.5-5.3"
        clipRule="evenodd"
      />
      <Path d="M14.61 21.05v-5.8c0-.811.317-1.54.834-2.077.137-.143.043-.423-.155-.423H2.7a.2.2 0 0 0-.2.2v3.25c0 3.17 2.21 5.3 5.5 5.3h6.406c.126 0 .221-.116.211-.242a3 3 0 0 1-.007-.208" />
    </G>
    <Path
      fill={props.color}
      d="M18.489 13.522a.875.875 0 0 0-.875.874v2.9a.875.875 0 0 0 1.75 0v-2.9a.875.875 0 0 0-.875-.875M18.488 19.387a.86.86 0 1 0 .002 1.72.86.86 0 0 0-.002-1.72"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.1 8.15h4.5a.749.749 0 1 0 0-1.5h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75m-4.7 0h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75M7.4 17.35h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.1 15.85h2.31a.2.2 0 0 0 .2-.2v1.9a.2.2 0 0 0-.2-.2H12.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75"
    />
  </Svg>
);
export default IconlystServerErrorBulk;
