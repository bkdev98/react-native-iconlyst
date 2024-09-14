import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseRemoveBulk = ({
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
      <Path d="m13.414 12 5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586zM10.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414L12 13.414z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.707 17.293 13.414 12 12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414L10.586 12 12 13.414l5.293 5.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseRemoveBulk;
