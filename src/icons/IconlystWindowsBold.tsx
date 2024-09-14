import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindowsBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.3 5.277a.3.3 0 0 0-.363-.293L4.33 6.195c-.86.19-1.46.94-1.46 1.81v3.45a.3.3 0 0 0 .3.3H10a.3.3 0 0 0 .3-.3zM20.44 3.425c-.44-.36-1.01-.49-1.56-.37l-6.921 1.49c-.1.021-.159.127-.159.23v6.68a.3.3 0 0 0 .3.3h8.73a.3.3 0 0 0 .3-.3v-6.58c0-.57-.25-1.1-.69-1.45M3.17 13.255a.3.3 0 0 0-.3.3v3.45c0 .88.6 1.63 1.47 1.82l5.597 1.211a.3.3 0 0 0 .363-.293v-6.188a.3.3 0 0 0-.3-.3zM11.8 20.245c0 .096.055.198.15.219l6.93 1.5c.13.03.26.04.39.04a1.854 1.854 0 0 0 1.86-1.86v-6.59a.3.3 0 0 0-.3-.3H12.1a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWindowsBold;
