import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUi8Bold = ({
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
      d="M17.103 11.398c-.07.01-.15.01-.23.01a3.675 3.675 0 0 1-3.63-4.21 3.674 3.674 0 0 1 3.63-3.14c2.02 0 3.67 1.65 3.67 3.67 0 1.95-1.52 3.55-3.44 3.67m-8.4 4.09c.59 0 1.07-.48 1.07-1.07v-2.73a.749.749 0 1 1 1.5 0v2.73a2.57 2.57 0 1 1-5.14 0v-2.73c0-.41.34-.75.75-.75s.75.34.75.75v2.73c0 .59.48 1.07 1.07 1.07m3.79-2.63a.749.749 0 1 1 1.5 0v3.29c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75zm4.38-10.3a5.17 5.17 0 0 0-4.73 3.099l-.618-.358a2.8 2.8 0 0 0-2.8 0L3.368 8.396a2.77 2.77 0 0 0-1.411 2.427v5.739c0 1 .539 1.929 1.404 2.423l5.363 3.1a2.8 2.8 0 0 0 2.801 0l5.361-3.098a2.8 2.8 0 0 0 1.406-2.425v-3.854h.001a5.18 5.18 0 0 0 3.75-4.98c0-2.85-2.32-5.17-5.17-5.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.873 9.048c-.22 0-.41-.15-.41-.33s.18-.34.41-.34c.22 0 .4.16.4.34s-.18.33-.4.33m0-2.64c.22 0 .4.16.4.34s-.18.33-.4.33-.41-.15-.41-.33.18-.34.41-.34m0-1.3c-.94 0-1.71.74-1.71 1.64 0 .37.13.71.35.98-.22.28-.35.62-.35.99 0 .31.09.59.25.84.1.16.22.3.37.4.3.25.68.39 1.09.39.94 0 1.7-.73 1.7-1.63 0-.37-.13-.71-.35-.99.22-.27.35-.61.35-.98 0-.9-.76-1.64-1.7-1.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUi8Bold;
