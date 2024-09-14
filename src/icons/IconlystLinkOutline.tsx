import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.663 5.474a5.656 5.656 0 0 1 7.998 7.998l-.008.01-2.25 2.25a6 6 0 0 1-.612.53h-.001a5.656 5.656 0 0 1-7.917-1.142.75.75 0 1 1 1.201-.898 4.156 4.156 0 0 0 6.268.449l2.245-2.246a4.156 4.156 0 0 0-5.882-5.872.75.75 0 0 1-1.042-1.079"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.21 9.272a5.656 5.656 0 0 1 7.917 1.141.75.75 0 0 1-1.202.899 4.156 4.156 0 0 0-6.267-.45l-2.246 2.246a4.156 4.156 0 0 0 5.882 5.872.75.75 0 1 1 1.042 1.08 5.656 5.656 0 0 1-7.998-7.998l.009-.01 2.25-2.25a6 6 0 0 1 .611-.53z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkOutline;
