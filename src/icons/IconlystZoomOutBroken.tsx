import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomOutBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.473 5.422v1.98h1.94M4.993 10.81V8.827h-1.94M6.473 7.403l1.94-1.981M4.993 8.828l-1.94 1.981M19.012 18.901c1.59-1.585 2.48-4.815 1.57-7.256-.89-2.426-4.11-2.31-6.33-2.524l-.07-4.108a1.586 1.586 0 0 0-3.17.024v9.366c0 .468-.51.761-.92.527l-1.16-.673c-1.08-.626-2.46-.019-2.74 1.203-.15.676.09 1.378.64 1.798.96.733 2.57 1.881 4.11 2.614 1.35.648 3.18.834 4.83.546"
    />
  </Svg>
);
export default IconlystZoomOutBroken;
