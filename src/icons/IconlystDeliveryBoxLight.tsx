import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxLight = ({
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
      d="M12.292 19.663a1.3 1.3 0 0 0-1.343-1.259 1.3 1.3 0 0 0-1.265 1.335c.02.717.622 1.28 1.342 1.26a1.3 1.3 0 0 0 1.266-1.336"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.813 6.74 2.08.61 4.532 11.188M12.201 19.216l7.988-3.202"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.934 14.9-2.688 1.036c-.936.362-1.782-.07-2.146-1.005l-.642-1.68c-.365-.935-.037-1.82.903-2.182l2.687-1.038c.94-.362 1.782.071 2.146 1.006l.643 1.68c.364.935.037 1.82-.903 2.182M14.137 7.995 11.45 9.033c-.936.362-1.782-.071-2.146-1.005l-.642-1.682c-.365-.934-.037-1.818.903-2.181l2.688-1.037c.94-.363 1.781.07 2.145 1.005l.643 1.681c.364.933.037 1.819-.903 2.181"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxLight;
