import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApronBold = ({
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
      d="M9.197 2.25a.75.75 0 0 1 .75.75c0 1.02-.025 1.963-.135 2.834h4.376c-.11-.871-.135-1.813-.135-2.834a.75.75 0 0 1 1.5 0c0 1.926.101 3.302.557 4.418.438 1.071 1.238 1.979 2.816 2.868a2.54 2.54 0 0 1 1.294 2.382l-.46 6.605a2.53 2.53 0 0 1-2.33 2.352c-2.894.214-7.977.152-10.952-.175a2.53 2.53 0 0 1-2.25-2.345l-.448-6.437a2.54 2.54 0 0 1 1.294-2.382c1.579-.89 2.378-1.797 2.816-2.868.456-1.116.557-2.492.557-4.418a.75.75 0 0 1 .75-.75m-.264 12.132a3.068 3.068 0 1 0 6.135 0v-.431c0-.564-.457-1.023-1.022-1.023h-4.09c-.566 0-1.023.459-1.023 1.023z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystApronBold;
