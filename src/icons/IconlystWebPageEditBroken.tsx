import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEditBroken = ({
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
      d="M12.726 3h-4.9c-2.936 0-4.78 2.08-4.78 5.026v7.947c0 2.946 1.835 5.027 4.78 5.027h3.715M21.039 11.594v4.378c0 2.946-1.83 5.027-4.78 5.027h-1.108M6.333 6.805h-.056m2.499 0H8.72M9.676 9.695h-6.63M17.605 4.165a1.33 1.33 0 0 1 1.882-.072l.891.825c.54.5.573 1.342.073 1.88l-4.18 4.56a2.32 2.32 0 0 1-1.348.745l-.97.162a1.087 1.087 0 0 1-1.26-1.188l.109-1c.052-.483.255-.938.579-1.3l2.112-2.306"
    />
  </Svg>
);
export default IconlystWebPageEditBroken;
