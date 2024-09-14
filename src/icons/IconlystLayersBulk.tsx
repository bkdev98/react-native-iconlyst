import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLayersBulk = ({
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
      d="M21.284 12.2c0 .65-.34 1.22-.9 1.53l-1.09.62-4.34 2.44a4.69 4.69 0 0 1-4.55 0l-4.34-2.44-1.09-.61c-.56-.32-.89-.89-.89-1.54 0-.64.33-1.22.89-1.53l1.16-.65 4.27 2.41a4.686 4.686 0 0 0 4.55 0l4.27-2.41 1.16.65c.56.31.9.89.9 1.53"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.284 7.84c0 .64-.34 1.22-.9 1.53l-1.16.65-4.27 2.41a4.69 4.69 0 0 1-4.55 0l-4.27-2.41-1.16-.65c-.56-.31-.89-.89-.89-1.53s.33-1.22.89-1.53l5.43-3.06c1.41-.78 3.15-.78 4.55 0l5.43 3.06c.56.31.9.89.9 1.53M21.284 16.49c0 .65-.34 1.22-.9 1.54l-5.43 3.05a4.69 4.69 0 0 1-4.55 0l-5.43-3.05c-.56-.32-.89-.89-.89-1.54 0-.64.33-1.21.89-1.53l1.09-.61 4.34 2.44a4.686 4.686 0 0 0 4.55 0l4.34-2.44 1.09.61c.56.32.9.89.9 1.53" />
    </G>
  </Svg>
);
export default IconlystLayersBulk;
