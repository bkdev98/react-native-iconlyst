import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.084 8.5c0-1.271 1.065-2.25 2.313-2.25s2.312.979 2.312 2.25v.082l1.01-1.384c.738-1.012 2.167-1.244 3.2-.55 1.052.708 1.323 2.124.572 3.154L14.888 12l1.603 2.198c.751 1.03.48 2.446-.572 3.153-1.033.695-2.462.463-3.2-.549l-1.01-1.384v.082c0 1.271-1.064 2.25-2.312 2.25s-2.313-.979-2.313-2.25zm2.313-.75c-.478 0-.813.364-.813.75v7c0 .386.335.75.813.75s.812-.364.812-.75v-2.383a.75.75 0 0 1 1.356-.441l2.366 3.242a.855.855 0 0 0 1.152.188.71.71 0 0 0 .196-1.025l-1.926-2.639a.75.75 0 0 1 0-.884l1.926-2.64a.71.71 0 0 0-.197-1.024.855.855 0 0 0-1.151.188l-2.366 3.242a.75.75 0 0 1-1.356-.441V8.5c0-.386-.334-.75-.812-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKickstarterCircleOutline;
