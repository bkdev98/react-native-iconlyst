import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTentBold = ({
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
      d="m17.727 21.011-.42-5.8 2.053 5.8zm-8.317 0c.75-1.18 1.89-3.16 2.7-5.42.81 2.26 1.95 4.24 2.7 5.42zm-3.25 0H4.527l2.053-5.8zm14.84 0h-.06l-2.74-7.82a.8.8 0 0 0-.18-.29l-.52-.51-4.8-4.79v-.44h2.49c.42 0 .75-.33.75-.75v-2.43c0-.41-.33-.75-.75-.75h-3.24a.75.75 0 0 0-.75.75v3.62l-5.32 5.3c-.08.08-.14.18-.18.29l-2.74 7.83a.74.74 0 0 0-.71.74c0 .42.34.75.75.75h18a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCampTentBold;
