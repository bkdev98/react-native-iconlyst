import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotDrinkBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M8.01 9.118a.3.3 0 0 0-.3-.3H6.452a3.21 3.21 0 0 0-3.208 3.208v2.294a7.18 7.18 0 0 0 14.362 0v-2.294a3.21 3.21 0 0 0-3.208-3.208H9.81a.3.3 0 0 0-.3.3v3.909a.75.75 0 0 1-1.5 0z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M13.045 2.47a.75.75 0 0 0-1.061 1.06.444.444 0 0 1 0 .63 1.945 1.945 0 0 0 0 2.751.75.75 0 1 0 1.06-1.062.445.445 0 0 1 0-.628c.761-.76.76-1.992 0-2.751M8.328 4.16a.75.75 0 0 1 0 1.06.445.445 0 0 0 0 .63.75.75 0 1 1-1.06 1.061 1.945 1.945 0 0 1 0-2.75.75.75 0 0 1 1.06 0M20.006 10.905c.464.346.811.86.953 1.557l.008.047c.276 2.014-.894 3.344-1.978 4.11a7.8 7.8 0 0 1-2.213 1.072l-.014.003-.004.002h-.002l-.2-.723.2.723a.75.75 0 0 1-.398-1.446l.003-.001.025-.007.11-.035a6.34 6.34 0 0 0 1.628-.814c.855-.604 1.515-1.447 1.36-2.655-.072-.33-.217-.513-.374-.63-.177-.132-.419-.216-.706-.255a3.595 3.595 0 0 0-1.113.046l-.013.003a.75.75 0 0 1-.348-1.46l.175.73-.175-.73h.003l.003-.001.01-.002.033-.007.108-.022a5.1 5.1 0 0 1 1.52-.043c.44.06.952.205 1.4.538" />
    </G>
  </Svg>
);
export default IconlystHotDrinkBulk;
