import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSearchExploreBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.038 19.96 3.386 9.675a1.45 1.45 0 0 1 .096-1.965c2.277-2.252 5.034-3.468 7.83-3.647M19.737 10.918l.998-1.25a1.454 1.454 0 0 0-.12-1.936c-1.454-1.446-3.107-2.467-4.84-3.064M17.45 16.748a2.468 2.468 0 1 1-3.491-3.49 2.468 2.468 0 0 1 3.49 3.49m0 0 1.337 1.338"
    />
  </Svg>
);
export default IconlystWirelessSearchExploreBroken;
