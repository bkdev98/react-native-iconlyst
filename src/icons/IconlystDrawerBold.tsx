import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawerBold = ({
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
      d="M10.97 7.075h2.06a.75.75 0 0 1 0 1.5h-2.06a.75.75 0 0 1 0-1.5m10.23 3.55a.3.3 0 0 0 .3-.3v-2.32c0-2.567-1.652-4.29-4.112-4.29H6.612c-2.46 0-4.112 1.723-4.112 4.29v2.32a.3.3 0 0 0 .3.3zM13.03 15.215h-2.06a.75.75 0 0 1 0-1.5h2.06a.75.75 0 0 1 0 1.5M2.8 12.125a.3.3 0 0 0-.3.3v1.58c0 1.853.867 3.257 2.267 3.902v1.627a.75.75 0 0 0 1.5 0v-1.26c.116.008.224.03.344.03h10.775c.121 0 .23-.022.346-.03v1.26a.75.75 0 0 0 1.5 0v-1.627c1.4-.646 2.268-2.049 2.268-3.902v-1.58a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrawerBold;
