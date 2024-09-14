import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlides2Broken = ({
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
      d="M9.1 20.064h5.985a3.125 3.125 0 0 0 3.125-3.124V7.063c0-1.726-1.399-3.125-3.125-3.125H9.1a3.125 3.125 0 0 0-3.125 3.125v9.877c0 1.725 1.399 3.124 3.125 3.124M5.975 6.785h-.551a2.34 2.34 0 0 0-2.34 2.35v1.897M5.975 17.22h-.551a2.345 2.345 0 0 1-2.34-2.349v-.937"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.193 6.785h.551a2.34 2.34 0 0 1 2.34 2.35v1.433M18.193 17.22h.551a2.345 2.345 0 0 0 2.34-2.35v-1.499"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.14 12.877a7.7 7.7 0 0 1-2.248 1.411c-.726.286-1.333-.071-1.423-.786a14 14 0 0 1 0-3.008c.097-.743.768-1.058 1.423-.782.84.344 1.594.81 2.249 1.411.56.507.573 1.227 0 1.754"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlides2Broken;
