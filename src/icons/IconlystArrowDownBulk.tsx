import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="m10.81 8.202-.327-3.699c0-.83.68-1.503 1.517-1.503a1.51 1.51 0 0 1 1.518 1.503l-.327 3.7c0 .65-.533 1.179-1.19 1.179-.66 0-1.191-.528-1.191-1.18"
        opacity={0.4}
      />
      <Path d="M10.87 20.625c-.059-.058-.305-.274-.51-.477-1.283-1.184-3.382-4.274-4.024-5.89-.102-.246-.32-.867-.336-1.2a2 2 0 0 1 .22-.91c.203-.36.525-.649.904-.808.262-.101 1.05-.26 1.064-.26.86-.159 2.259-.245 3.805-.245 1.472 0 2.814.086 3.688.216.016.014.993.173 1.328.347.612.317.991.938.991 1.602v.058c-.014.433-.394 1.343-.408 1.343-.642 1.53-2.639 4.548-3.966 5.761 0 0-.342.343-.554.491a1.77 1.77 0 0 1-1.064.347c-.423 0-.817-.13-1.138-.375" />
    </G>
  </Svg>
);
export default IconlystArrowDownBulk;
