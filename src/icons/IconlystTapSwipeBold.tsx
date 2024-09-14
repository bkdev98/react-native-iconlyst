import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapSwipeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.226 5.677a.803.803 0 0 0 .836-.744.79.79 0 0 0-.744-.836C5.56 3.867 3.623 6.54 2.964 7.694a.793.793 0 0 0 1.376.785c.636-1.115 2.117-2.95 4.886-2.802"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.558 7.075a.793.793 0 0 0 .624 1.456c.12-.05.545-.19 1.014.17a.791.791 0 1 0 .964-1.257 2.6 2.6 0 0 0-2.602-.369"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.112 13.492c-.279-2.83-3.733-3.606-6.038-4.452l1.079-4.386a1.746 1.746 0 0 0-3.384-.86l-2.611 9.96a.67.67 0 0 1-1.118.305l-1.05-1.04a2.038 2.038 0 0 0-3.245.516 1.94 1.94 0 0 0 .176 2.09c.82 1.048 2.21 2.718 3.638 3.925 2.236 1.891 6.421 2.645 8.86 1.22 2.127-1.243 3.974-4.43 3.693-7.278"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapSwipeBold;
