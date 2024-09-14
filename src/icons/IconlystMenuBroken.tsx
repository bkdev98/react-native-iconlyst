import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuBroken = ({
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
      d="M12.2 18.034h-.063m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522M12.2 12.012h-.063m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522M12.2 5.99h-.063m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522"
    />
  </Svg>
);
export default IconlystMenuBroken;
