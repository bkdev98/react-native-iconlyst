import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtomeBold = ({
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
      d="M8.651 16.232C7.29 14.87 6.162 13.424 5.304 12c.858-1.424 1.985-2.87 3.347-4.232 1.362-1.361 2.808-2.489 4.232-3.347 1.424.858 2.87 1.986 4.232 3.347 1.362 1.362 2.489 2.808 3.347 4.232-.858 1.424-1.986 2.87-3.347 4.232-1.362 1.361-2.808 2.489-4.232 3.347-1.424-.858-2.87-1.986-4.232-3.347m4.232 3.347c3.488 2.1 6.844 2.583 8.504.924s1.175-5.015-.925-8.503c2.1-3.488 2.584-6.844.924-8.503-1.66-1.66-5.015-1.176-8.503.924-3.488-2.1-6.843-2.584-8.503-.924S3.203 8.512 5.304 12c-2.1 3.488-2.584 6.843-.925 8.503s5.016 1.177 8.504-.924m0-9.826a2.247 2.247 0 1 1 0 4.494 2.247 2.247 0 0 1 0-4.494"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAtomeBold;
