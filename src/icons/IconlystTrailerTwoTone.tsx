import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrailerTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.324 20.235a2.227 2.227 0 1 1 0-4.455 2.227 2.227 0 0 1 0 4.455M6.844 8.865l-.497 2.777a.524.524 0 0 0 .515.617h7.854c.29 0 .524-.235.524-.524V8.957a.524.524 0 0 0-.524-.524H7.36a.524.524 0 0 0-.516.432M10.928 8.433v3.826"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.551 18.008h8.117l1.082 1.885M8.095 18.008H4.847a2.096 2.096 0 0 1-2.067-2.444l1.391-8.28a2.096 2.096 0 0 1 2.067-1.75h10.007c1.158 0 2.096.939 2.096 2.097v10.311" />
    </G>
  </Svg>
);
export default IconlystTrailerTwoTone;
