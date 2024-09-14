import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.928 16.336H11a.75.75 0 0 1 0-1.5h3.928a.75.75 0 0 1 0 1.5m-10.91-3.588a.3.3 0 0 0-.295.351l.8 4.625c.407 2.225 2.046 3.221 3.488 3.221h9.908c1.443 0 3.08-.996 3.488-3.226l.8-4.62a.3.3 0 0 0-.296-.351zM22.155 11.248c.163 0 .298-.13.292-.294-.032-.939-.313-1.77-.845-2.398-.63-.744-1.555-1.154-2.605-1.154h-.589L16.35 3.46a.75.75 0 1 0-1.33.694l1.696 3.248H9.21l1.697-3.25a.75.75 0 0 0-.317-1.01.75.75 0 0 0-1.013.316l-2.06 3.944h-.584c-1.05 0-1.975.41-2.606 1.155-.531.627-.812 1.458-.843 2.397a.29.29 0 0 0 .292.294z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBasketBold;
