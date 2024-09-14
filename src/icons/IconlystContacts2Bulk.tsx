import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts2Bulk = ({
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
      d="M4.476 5.022c.901-.857 2.172-1.272 3.657-1.272h8.043c1.49 0 2.76.414 3.66 1.272.903.862 1.368 2.108 1.364 3.64v8.668c0 1.531-.467 2.78-1.371 3.643-.9.86-2.171 1.277-3.661 1.277H8.133c-1.489 0-2.76-.425-3.66-1.299-.904-.876-1.372-2.141-1.372-3.693V8.661c0-1.532.47-2.778 1.375-3.64"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.316 1.75a1 1 0 0 0-1 1v3.126a1 1 0 1 0 2 0V2.75a1 1 0 0 0-1-1M15.993 1.75a1 1 0 0 0-1 1v3.126a1 1 0 0 0 2 0V2.75a1 1 0 0 0-1-1"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.15 18.68c-1.1 0-4.2 0-4.2-2s3.1-2 4.2-2c2.1 0 3.2.3 3.8.9.3.3.4.7.4 1.1 0 2-3.1 2-4.2 2m0-11.2c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts2Bulk;
