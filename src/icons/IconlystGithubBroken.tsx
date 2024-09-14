import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubBroken = ({
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
      d="M17.398 10.606a3.14 3.14 0 0 0-.056-2.335s-.73-.217-2.422.916a8.3 8.3 0 0 0-4.337 0c-1.691-1.133-2.422-.916-2.422-.916a3.14 3.14 0 0 0-.056 2.335 3.37 3.37 0 0 0-.93 2.342c0 3.358 2.045 4.087 3.99 4.328-.417.43-1.332 2.108-1.171 3.722H8.537c-2.947 0-4.786-2.082-4.786-5.02V8.03C3.751 5.082 5.599 3 8.537 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.328 12.93c0 3.383-2.046 4.12-3.99 4.336.417.431 1.329 2.12 1.168 3.734l1.456-.002c2.958 0 4.787-2.082 4.787-5.02V8.03c0-2.948-1.829-5.03-4.777-5.03h-4.217"
    />
  </Svg>
);
export default IconlystGithubBroken;
