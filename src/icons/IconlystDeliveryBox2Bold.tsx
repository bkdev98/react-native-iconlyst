import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox2Bold = ({
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
      d="M10.052 9.38a.2.2 0 0 0 .004.344l2.647 1.533a.3.3 0 0 0 .3 0l7.451-4.314a.19.19 0 0 0 .042-.303 2.8 2.8 0 0 0-.502-.381L17.64 4.903a.2.2 0 0 0-.204.002zM8.18 8.639a.2.2 0 0 0 .205-.002l7.378-4.473a.2.2 0 0 0-.004-.344l-1.44-.83a2.91 2.91 0 0 0-2.935-.001L5.701 6.26a2.8 2.8 0 0 0-.494.376.19.19 0 0 0 .04.303zM13.746 12.56a.3.3 0 0 0-.15.26v8.393c0 .132.125.227.248.183a3 3 0 0 0 .471-.22l5.683-3.272a2.96 2.96 0 0 0 1.464-2.542v-6.56q-.001-.2-.034-.394c-.022-.132-.171-.197-.288-.13zM12.096 12.812a.3.3 0 0 0-.15-.26l-2.614-1.514a.2.2 0 0 0-.3.173v1.348a.75.75 0 0 1-1.5 0v-2.448a.2.2 0 0 0-.1-.173L4.558 8.274c-.116-.067-.264-.003-.286.13a2.5 2.5 0 0 0-.035.398v6.56a2.96 2.96 0 0 0 1.468 2.543l5.676 3.27q.226.13.467.219c.123.045.248-.05.248-.182z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBox2Bold;
