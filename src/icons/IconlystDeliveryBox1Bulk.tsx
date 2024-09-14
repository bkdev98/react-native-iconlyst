import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox1Bulk = ({
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
      d="M15.647 9.381a.2.2 0 0 1-.003.344l-2.648 1.533a.3.3 0 0 1-.3 0L5.244 6.944a.19.19 0 0 1-.041-.303c.151-.143.316-.273.5-.381L8.06 4.904a.2.2 0 0 1 .204.002zM17.518 8.64a.2.2 0 0 1-.204-.002L9.936 4.165a.2.2 0 0 1 .004-.344l1.44-.83a2.91 2.91 0 0 1 2.935-.001l5.683 3.271q.271.162.494.376a.19.19 0 0 1-.04.303z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.603 12.813a.3.3 0 0 1 .15-.26l2.615-1.514a.2.2 0 0 1 .3.173v1.348a.75.75 0 0 0 1.5 0v-2.449a.2.2 0 0 1 .1-.173l2.873-1.663c.116-.067.265-.003.286.129q.034.196.035.4v6.56a2.96 2.96 0 0 1-1.468 2.542l-5.676 3.27q-.226.13-.467.219c-.123.045-.248-.05-.248-.182zM11.953 12.56a.3.3 0 0 1 .15.26v8.394c0 .131-.124.227-.248.182a3 3 0 0 1-.471-.22l-5.683-3.271a2.96 2.96 0 0 1-1.464-2.542v-6.56q.001-.2.035-.395c.021-.132.17-.196.287-.129z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryBox1Bulk;
