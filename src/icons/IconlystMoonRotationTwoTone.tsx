import * as React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRotationTwoTone = ({
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
    <Circle
      cx={12.114}
      cy={12.613}
      r={4.596}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.518 12.56c1.247-.407.947.638 1.735.954.845.364 2.069-.08 1.794-.959a1.3 1.3 0 0 0-.186-.363c-.098-.135-.218-.256-.295-.404a1.7 1.7 0 0 1-.148-.4c-.097-.425.155-.819.416-1.167.163-.218.314-.45.323-.572.028-.366-.226-.802-.46-1.348M16.666 12.227c-1.05.342-1.595-.622-2.494-.82-1.192-.26-1.387.933-.591 1.729 1.358 1.687-1.361 2.48-.394 3.916M19.697 5.13a1.663 1.663 0 1 1-2.351 2.351 1.663 1.663 0 0 1 2.351-2.351"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M9.664 21.097a8.9 8.9 0 0 0 2.581.384h.002a8.864 8.864 0 0 0 8.727-10.436M5.507 6.858a8.8 8.8 0 0 1 1.539-1.417M3.894 9.656a8.8 8.8 0 0 0-.516 2.956M7.045 19.785a8.9 8.9 0 0 1-3.15-4.216M9.664 4.13a8.9 8.9 0 0 1 2.581-.385l.003.001a8.85 8.85 0 0 1 4.977 1.528" />
    </G>
  </Svg>
);
export default IconlystMoonRotationTwoTone;
