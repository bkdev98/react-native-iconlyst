import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.864 9.209-1.33 1.33a1.62 1.62 0 0 1 0 2.287 1.146 1.146 0 0 1-1.62 0L11.19 7.102a1.144 1.144 0 0 1 0-1.62 1.62 1.62 0 0 1 2.287 0l.002.001 1.432-1.431A3.58 3.58 0 0 1 17.44 3c.988 0 1.96.399 2.68 1.212 1.27 1.432 1.097 3.644-.258 4.997"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.59 7.5 5.8 13.291a1.76 1.76 0 0 0-.502 1.035l-.188 1.585a1.76 1.76 0 0 1-.502 1.035l-1.08 1.08a1.74 1.74 0 1 0 2.463 2.462l1.079-1.079a1.76 1.76 0 0 1 1.035-.502l1.585-.188a1.76 1.76 0 0 0 1.035-.503l5.79-5.791M10.324 15.32l1.65 1.65M12.453 13.191l1.65 1.65"
    />
  </Svg>
);
export default IconlystThermometerLight;
