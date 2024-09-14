import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBoldcurved = ({
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
      d="M21.682 9.73c-.387-1.647-2.105-1.732-3.486-1.8-.87-.045-1.769-.089-2.145-.478-.382-.396-.681-1.155-.972-1.889-.568-1.436-1.21-3.063-2.83-3.063-1.617 0-2.26 1.627-2.827 3.063-.29.734-.59 1.493-.972 1.89-.377.388-1.276.432-2.145.476-1.381.07-3.1.154-3.486 1.8-.367 1.563.78 2.508 1.792 3.342.692.57 1.346 1.11 1.49 1.77.142.64-.07 1.469-.275 2.27-.352 1.38-.752 2.941.583 3.948.417.316.84.44 1.258.44.905 0 1.787-.583 2.542-1.083.699-.463 1.422-.942 2.04-.942.62 0 1.343.48 2.041.942 1.106.73 2.48 1.639 3.803.643 1.334-1.007.934-2.57.581-3.95-.204-.8-.415-1.629-.276-2.269.146-.66.8-1.198 1.492-1.77 1.011-.834 2.159-1.779 1.791-3.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarBoldcurved;
