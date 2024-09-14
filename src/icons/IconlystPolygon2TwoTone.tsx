import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon2TwoTone = ({
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
      d="M12.55 4.27a1.24 1.24 0 0 1-.596-.126l-1.305-.638a1.244 1.244 0 0 0-1.644.534l-.68 1.283c-.18.34-.507.576-.884.643l-1.431.25c-.66.116-1.11.735-1.016 1.399l.203 1.439c.054.38-.07.763-.338 1.038l-1.01 1.044a1.244 1.244 0 0 0 0 1.729l1.01 1.044c.267.275.392.659.338 1.038l-.203 1.438a1.244 1.244 0 0 0 1.016 1.4l1.43.25c.378.066.704.303.884.641l.681 1.284a1.24 1.24 0 0 0 1.644.534l1.305-.637c.188-.092.393-.134.596-.126"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.55 4.27c.17-.007.34-.05.496-.126l1.305-.638a1.245 1.245 0 0 1 1.644.534l.681 1.283c.18.34.506.576.884.643l1.43.25c.66.116 1.11.735 1.017 1.399l-.204 1.439c-.054.38.07.763.337 1.038l1.01 1.044a1.24 1.24 0 0 1 0 1.729l-1.01 1.044a1.24 1.24 0 0 0-.337 1.038l.204 1.438a1.244 1.244 0 0 1-1.017 1.4l-1.43.25a1.24 1.24 0 0 0-.884.641l-.68 1.284a1.243 1.243 0 0 1-1.645.534l-1.305-.637a1.2 1.2 0 0 0-.495-.126"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPolygon2TwoTone;
