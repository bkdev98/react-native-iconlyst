import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChat2Brokensharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.748 3.264a9.226 9.226 0 0 1 9.05 15.397 9.19 9.19 0 0 1-6.723 2.7C8.779 21.292 3 21.344 3 21.344s.051-5.847.048-9.2a9.2 9.2 0 0 1 2.704-6.53M8.565 12.52h-.099M12.3 12.52h-.1M16.033 12.52h-.098"
    />
  </Svg>
);
export default IconlystChat2Brokensharp;
