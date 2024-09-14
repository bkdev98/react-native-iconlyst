import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashDisableTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.65 13.7 2.56-2.922a.575.575 0 0 0-.432-.954H15.09a.575.575 0 0 1-.542-.767l2.195-5.153a.575.575 0 0 0-.542-.767h-4.965a.575.575 0 0 0-.54.377L9.43 6.604"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.645 5.172 15.964 15.964M8.163 9.695l-1.17 2.857a.575.575 0 0 0 .54.774h3.929c.378 0 .653.358.556.723l-1.697 6.363c-.157.588.588.985.989.527l3.78-4.314"
    />
  </Svg>
);
export default IconlystFlashDisableTwoTone;
