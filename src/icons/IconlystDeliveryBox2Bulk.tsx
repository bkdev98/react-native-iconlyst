import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox2Bulk = ({
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
      d="M10.052 9.38a.2.2 0 0 0 .003.344l2.648 1.533a.3.3 0 0 0 .3 0l7.451-4.314a.19.19 0 0 0 .041-.303 2.8 2.8 0 0 0-.5-.381L17.64 4.903a.2.2 0 0 0-.204.002zM8.18 8.639a.2.2 0 0 0 .204-.002l7.379-4.473a.2.2 0 0 0-.004-.344l-1.44-.83a2.91 2.91 0 0 0-2.935-.001L5.701 6.26a2.8 2.8 0 0 0-.494.376.19.19 0 0 0 .04.303z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.096 12.813a.3.3 0 0 0-.15-.26L9.331 11.04a.2.2 0 0 0-.3.173v1.348a.75.75 0 0 1-1.5 0v-2.449a.2.2 0 0 0-.1-.173L4.558 8.275c-.116-.067-.265-.003-.286.129a2.5 2.5 0 0 0-.035.4v6.56a2.96 2.96 0 0 0 1.468 2.542l5.676 3.27q.226.13.467.219c.123.045.248-.05.248-.182zM13.746 12.56a.3.3 0 0 0-.15.26v8.394c0 .131.125.227.248.182q.244-.088.471-.22l5.683-3.271a2.96 2.96 0 0 0 1.464-2.542v-6.56q-.001-.2-.034-.395c-.022-.132-.171-.196-.288-.129z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryBox2Bulk;
