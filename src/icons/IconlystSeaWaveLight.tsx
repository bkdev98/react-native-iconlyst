import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeaWaveLight = ({
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
      d="M3.36 13.92c.55.51 1.295.831 2.06.801a1.805 1.805 0 1 0 0-3.61c-.563 0-.843.076-1.303.211.562-2.605 3.794-3.13 5.588.176l.013.023c.99 1.624 1.992 3.267 3.686 3.2a1.804 1.804 0 1 0 0-3.61c-.563 0-.844.076-1.303.211.561-2.605 3.813-3.13 5.606.176 1.55 2.542 2.776 3.17 3.408 3.31M20.869 5.246a3.44 3.44 0 0 0-3.551 0c-2.482 1.51-4.62-1.509-7.102 0-2.482 1.51-4.62-1.509-7.102 0M20.869 18.754a3.44 3.44 0 0 1-3.551 0c-2.482-1.51-4.62 1.508-7.102 0-2.482-1.51-4.62 1.508-7.102 0"
    />
  </Svg>
);
export default IconlystSeaWaveLight;
