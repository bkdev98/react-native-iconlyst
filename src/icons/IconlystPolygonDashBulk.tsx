import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonDashBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m19.184 16.282-3.054 3.05a1 1 0 0 0 1.413 1.416l3.054-3.05a1 1 0 1 0-1.413-1.416M4.813 16.282a.999.999 0 1 0-1.412 1.416l3.056 3.05a1 1 0 0 0 1.414-.002 1 1 0 0 0-.002-1.413zM6.457 3.553 3.4 6.602a1 1 0 0 0 1.412 1.416l3.056-3.049a.999.999 0 1 0-1.412-1.416M19.185 8.018a1 1 0 0 0 1.414-.002 1 1 0 0 0-.002-1.414l-3.055-3.05A1 1 0 1 0 16.13 4.97z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.16 20.15H9.84a1 1 0 1 0 0 2h4.32a1 1 0 1 0 0-2M4 14.31V9.99a1 1 0 1 0-2 0v4.32a1 1 0 1 0 2 0M14.16 2.15H9.84a1 1 0 1 0 0 2h4.32a1 1 0 1 0 0-2M21 8.99a1 1 0 0 0-1 1v4.32a1 1 0 1 0 2 0V9.99a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonDashBulk;
