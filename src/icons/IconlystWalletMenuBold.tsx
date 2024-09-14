import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletMenuBold = ({
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
      fillRule="evenodd"
      d="M18.53 11.196a.749.749 0 1 1-1.5 0c0-.42.33-.75.75-.75.41 0 .75.33.75.75m-2.63.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.8-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.4 11.256a3.29 3.29 0 0 1 3.28-3.29h4.008a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098H8.43c-3 0-5.44 2.44-5.44 5.44v3.306c0 .218.226.365.434.299a4.3 4.3 0 0 1 1.286-.195h3.43c2.29 0 3.95 1.7 3.95 4.04v3.18q0 .605-.135 1.142c-.05.201.095.408.303.408h4.302c3.02 0 5.276-2.448 5.423-5.35a.29.29 0 0 0-.293-.3h-4.01c-1.8 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.335 16.306H7.172v-2.14h.967c.75 0 1.196.483 1.196 1.29zm0 2.33c0 .815-.447 1.301-1.196 1.301h-.967v-2.131h2.163zm-3.663-2.33H3.51v-.85c0-.807.447-1.29 1.196-1.29h.966zm0 3.631h-.966c-.749 0-1.196-.486-1.196-1.301v-.83h2.162zm2.467-7.271H4.706c-1.588 0-2.696 1.148-2.696 2.79v3.18c0 1.649 1.108 2.801 2.696 2.801H8.14c1.588 0 2.696-1.152 2.696-2.801v-3.18c0-1.642-1.108-2.79-2.696-2.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletMenuBold;
