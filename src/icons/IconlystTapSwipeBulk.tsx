import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapSwipeBulk = ({
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
      d="M21.612 13.494c-.279-2.83-3.734-3.606-6.038-4.452l1.079-4.386a1.746 1.746 0 0 0-3.384-.86l-2.612 9.96a.67.67 0 0 1-1.117.304l-1.05-1.04a2.038 2.038 0 0 0-3.245.517 1.94 1.94 0 0 0 .176 2.09c.819 1.048 2.21 2.718 3.638 3.925 2.236 1.89 6.421 2.645 8.86 1.22 2.126-1.243 3.974-4.43 3.693-7.278"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.726 5.676a.803.803 0 0 0 .836-.744.79.79 0 0 0-.744-.836c-3.757-.23-5.695 2.443-6.354 3.597a.793.793 0 0 0 1.376.785c.636-1.115 2.117-2.95 4.886-2.802"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.058 7.074a.793.793 0 0 0 .624 1.456c.12-.05.545-.189 1.014.171a.791.791 0 1 0 .964-1.257 2.6 2.6 0 0 0-2.602-.37"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapSwipeBulk;
