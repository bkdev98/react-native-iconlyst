import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3TwoTone = ({
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
      d="m10.199 11.974-5.3 2.243a2.29 2.29 0 0 0-1.399 2.11v.086a2.29 2.29 0 0 0 2.29 2.29m13.419 0a2.29 2.29 0 0 0 .876-4.406l-7.567-3.133.002-.486c0-.513.325-.959.803-1.146a2.2 2.2 0 0 0 1.305-2.672 2.16 2.16 0 0 0-1.507-1.484 2.198 2.198 0 0 0-2.793 2.113"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.79 18.704h13.418"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoatHanger3TwoTone;
