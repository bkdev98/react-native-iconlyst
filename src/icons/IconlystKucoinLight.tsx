import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKucoinLight = ({
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
      d="M7.023 14.315v4.295a1.649 1.649 0 1 1-3.298 0V5.397c0-.916.743-1.659 1.649-1.659.916 0 1.649.743 1.649 1.66v4.275l6.118-6.108a1.93 1.93 0 0 1 2.728 0l3.97 3.98c.58.57.58 1.497 0 2.077a1.46 1.46 0 0 1-1.038.427c-.377 0-.744-.142-1.039-.427l-3.257-3.268-5.64 5.64 5.64 5.64 3.033-3.034c.58-.57 1.507-.57 2.077 0a1.464 1.464 0 0 1 .01 2.077l-3.756 3.766a1.95 1.95 0 0 1-2.728 0z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.727 12.001a1.273 1.273 0 1 0-2.546 0 1.273 1.273 0 0 0 2.546 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKucoinLight;
