import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsBulk = ({
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
      d="M5.399 16.234c-.874 0-1.585.711-1.585 1.585s.71 1.585 1.585 1.585c.874 0 1.585-.71 1.585-1.585 0-.874-.711-1.585-1.585-1.585M5.399 10.414c-.874 0-1.585.711-1.585 1.585s.71 1.585 1.585 1.585c.874 0 1.585-.71 1.585-1.585 0-.874-.711-1.585-1.585-1.585M5.399 4.598c-.874 0-1.585.71-1.585 1.585 0 .873.71 1.584 1.585 1.584.874 0 1.585-.711 1.585-1.584s-.711-1.585-1.585-1.585"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.186 16.836h-8.727a1 1 0 1 0 0 2h8.727a1 1 0 1 0 0-2M19.186 11h-8.727a1 1 0 1 0 0 2h8.727a1 1 0 1 0 0-2M10.459 7.184h8.727a1 1 0 1 0 0-2h-8.727a1 1 0 1 0 0 2" />
    </G>
  </Svg>
);
export default IconlystSortsBulk;
