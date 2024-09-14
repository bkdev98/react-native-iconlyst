import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.676 5.323-.681-1.283a1.245 1.245 0 0 0-1.644-.534l-1.305.638a1.24 1.24 0 0 1-1.092 0l-1.305-.638a1.244 1.244 0 0 0-1.644.534l-.68 1.283c-.18.34-.507.576-.884.643l-1.431.25c-.66.116-1.11.735-1.016 1.399l.203 1.439c.054.38-.07.763-.338 1.038l-1.01 1.044a1.244 1.244 0 0 0 0 1.729l1.01 1.044c.267.275.392.659.338 1.038l-.203 1.438a1.244 1.244 0 0 0 1.016 1.4M18.99 6.215c.66.116 1.11.734 1.017 1.398l-.203 1.439c-.055.38.07.763.336 1.038l1.01 1.044a1.24 1.24 0 0 1 0 1.73l-1.01 1.043a1.24 1.24 0 0 0-.336 1.038M18.99 17.783l-1.43.251a1.24 1.24 0 0 0-.884.641l-.681 1.284a1.243 1.243 0 0 1-1.644.534l-1.305-.637a1.24 1.24 0 0 0-1.092 0l-1.305.637a1.24 1.24 0 0 1-1.644-.534l-.68-1.284"
    />
  </Svg>
);
export default IconlystPolygon2Broken;
