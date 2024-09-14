import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelcoinBold = ({
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
      d="M14.033 10.945h-2.157l-.57 3.057a.886.886 0 0 0 .87 1.062h.831a.75.75 0 0 1 0 1.5h-.83a2.383 2.383 0 0 1-2.344-2.844l.517-2.776h-.829a.75.75 0 0 1-.27-1.448c1.052-.408 1.4-.666 1.67-1.591a.75.75 0 0 1 1.457.348l-.223 1.192h1.878a.75.75 0 0 1 0 1.5m6.353-3.138-4.924-4.52a3 3 0 0 0-2.908-.65L6.18 4.65a3 3 0 0 0-2.01 2.198l-1.45 6.52a2.99 2.99 0 0 0 .895 2.836l4.923 4.52a3.006 3.006 0 0 0 2.908.649l6.375-2.01a3 3 0 0 0 2.01-2.198l1.45-6.52a2.98 2.98 0 0 0-.894-2.837"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelcoinBold;
