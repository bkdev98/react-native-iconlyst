import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.947C21 18.92 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.973V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.755 20.999c.16-1.615-.753-3.305-1.17-3.736 1.946-.217 3.99-.953 3.99-4.337a3.37 3.37 0 0 0-.93-2.324 3.14 3.14 0 0 0-.056-2.336s-.73-.216-2.421.918a8.3 8.3 0 0 0-4.338 0c-1.692-1.134-2.422-.918-2.422-.918a3.14 3.14 0 0 0-.057 2.336 3.37 3.37 0 0 0-.93 2.343c0 3.358 2.046 4.086 3.991 4.328-.417.43-1.334 2.108-1.172 3.723"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGithubSquareTwoTone;
