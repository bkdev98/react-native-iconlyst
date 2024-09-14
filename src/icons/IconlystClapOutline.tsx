import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClapOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.326 8.782a1.84 1.84 0 0 1 2.51.673l1.579 2.736a6.744 6.744 0 0 1-11.68 6.744l-.003-.006-3.08-5.336c-.61-1.056-.243-2.457.824-3.073 1.056-.609 2.456-.243 3.072.825a.75.75 0 1 1-1.3.75.77.77 0 0 0-1.023-.275.77.77 0 0 0-.274 1.023l3.078 5.332a5.243 5.243 0 0 0 9.081-5.243l-1.573-2.728a.337.337 0 0 0-.46-.123 1.153 1.153 0 0 0-.423 1.575l.033.057a.75.75 0 1 1-1.3.75l-.032-.057a2.653 2.653 0 0 1 .971-3.624"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.17 6.656a2.25 2.25 0 0 1 3.072.825l-.65.374.65-.374 3.496 6.06a.75.75 0 1 1-1.299.75L9.943 8.23a.75.75 0 1 0-1.298.748.75.75 0 0 1-1.3.75 2.25 2.25 0 0 1 .825-3.073"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.74 6.726a2.25 2.25 0 0 1 2.24 1.106l3.164 5.477a.75.75 0 0 1-1.3.75L6.683 8.583a.75.75 0 0 0-1.373.18.75.75 0 0 0 .074.568l3.164 5.478a.75.75 0 1 1-1.3.75L4.085 10.08A2.25 2.25 0 0 1 5.74 6.726M15.854 1.751a.75.75 0 0 1 .707.791l-.074 1.311a.75.75 0 1 1-1.497-.084l.073-1.311a.75.75 0 0 1 .791-.707m4.03 1.467a.75.75 0 0 1 .102 1.056l-.84 1.018a.75.75 0 0 1-1.157-.955l.84-1.017a.75.75 0 0 1 1.055-.102m2.21 3.29a.75.75 0 0 1-.44.965l-1.23.46a.75.75 0 1 1-.525-1.406l1.23-.459a.75.75 0 0 1 .965.44M15.182 6.473a1.837 1.837 0 0 1 2.51.673l1.579 2.737a6.744 6.744 0 0 1-1.816 8.703.75.75 0 0 1-.902-1.199 5.24 5.24 0 0 0 1.413-6.764l-1.573-2.727a.34.34 0 0 0-.46-.124c-.467.27-.676.817-.534 1.314a.75.75 0 0 1-1.442.412 2.654 2.654 0 0 1 1.225-3.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.028 4.348a2.25 2.25 0 0 1 3.069.82l2.226 3.739a.75.75 0 1 1-1.289.767L11.8 5.922a.75.75 0 1 0-1.297.748.75.75 0 0 1-1.3.75 2.25 2.25 0 0 1 .825-3.072"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.595 4.418a2.25 2.25 0 0 1 2.241 1.106l.665 1.147a.75.75 0 0 1-1.297.752l-.666-1.148-.001-.002a.75.75 0 0 0-1.298.749.75.75 0 0 1-1.3.75 2.25 2.25 0 0 1 1.656-3.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClapOutline;
