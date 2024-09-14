import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarNetworkTwoTone = ({
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
      d="M14.28 6.873c-.369-.573-1.136-.968-2.03-.968s-1.662.395-2.035.968M16.752 4.91C15.761 3.755 14.116 3 12.25 3c-1.869 0-3.515.758-4.506 1.912"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.869 16.59h1.33M8.293 16.59h1.33M5.588 13.488c4.414.626 8.895.626 13.309 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.59 20.257a.74.74 0 0 0 .741.743h1.467a.74.74 0 0 0 .74-.74v-.304a.74.74 0 0 1 .741-.74h5.934a.74.74 0 0 1 .74.74v.303c0 .41.332.741.74.741h1.478a.74.74 0 0 0 .74-.74v-3.872c0-.6-.191-1.185-.546-1.669l-.863-1.158a1.3 1.3 0 0 1-.166-.316l-.777-2.159a1.66 1.66 0 0 0-1.28-1.072 19.4 19.4 0 0 0-6.05 0c-.578.097-1.08.52-1.274 1.072l-.777 2.159q-.06.163-.165.302l-.878 1.208a2.8 2.8 0 0 0-.532 1.648z"
    />
  </Svg>
);
export default IconlystCarNetworkTwoTone;
