import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPlusAddBold = ({
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
      d="M13.482 11.963h-1.4v1.4c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.4h-1.4c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h1.4v-1.4a.749.749 0 1 1 1.5 0v1.4h1.4a.749.749 0 1 1 0 1.5m-2.23-9.34c-4.74 0-8.6 3.86-8.6 8.6a8.6 8.6 0 1 0 8.6-8.6M19.583 17.847a1.765 1.765 0 1 0 0 3.53 1.765 1.765 0 0 0 0-3.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPlusAddBold;
