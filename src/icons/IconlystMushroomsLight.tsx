import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMushroomsLight = ({
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
      d="M16.877 17.045c-.523.69-1.919 3.538-3.095 2.836-.599-.357-.991-.744-1.347-1.348-.68-1.156 2.12-2.598 2.797-3.133M7.168 13.913c.418.553 1.538 2.837 2.48 2.274.48-.286.795-.596 1.08-1.08.546-.927-1.7-2.083-2.242-2.512M15.04 6.864c-.419.553-1.538 2.837-2.481 2.274a2.85 2.85 0 0 1-1.08-1.081c-.545-.927 1.7-2.083 2.243-2.512"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M19.897 12.452c-1.617-1.617-3.85-2.017-5.546-.68-2.373 1.87 4.912 7.985 6.29 6.143 1.377-1.843.847-3.873-.744-5.463ZM4.746 10.231c1.296-1.296 3.087-1.617 4.447-.545 1.902 1.5-3.939 6.402-5.043 4.925s-.68-3.104.596-4.38ZM17.462 3.182c-1.297-1.297-3.087-1.617-4.447-.545-1.902 1.5 3.938 6.402 5.043 4.925s.679-3.105-.596-4.38Z"
    />
  </Svg>
);
export default IconlystMushroomsLight;
