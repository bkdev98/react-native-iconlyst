import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormat2Bold = ({
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
      d="M19.474 9.862h-2.365v1.859h1.886a.75.75 0 0 1 0 1.5h-1.886v1.65a.75.75 0 0 1-1.5 0v-5.76a.75.75 0 0 1 .75-.75h3.115a.75.75 0 0 1 0 1.5m-5.367 5.01a.75.75 0 0 1-1.5 0v-5.76a.75.75 0 0 1 1.5 0zm-2.724-1.26c0 1.309-.913 2.09-2.441 2.09a3.4 3.4 0 0 1-2.471-1.036c-.696-.726-1.069-1.766-1.025-2.856a3.8 3.8 0 0 1 1.228-2.627 3.42 3.42 0 0 1 2.457-.9 3.6 3.6 0 0 1 1.464.39.75.75 0 1 1-.679 1.337 2.1 2.1 0 0 0-.859-.23 1.9 1.9 0 0 0-1.373.513c-.444.405-.714.98-.739 1.58-.028.682.194 1.322.609 1.754.36.376.84.575 1.388.575.941 0 .941-.327.941-.59v-.87h-.941a.75.75 0 0 1 0-1.5h1.691a.75.75 0 0 1 .75.75zm7.384-9.94H6.901c-2.732 0-4.567 1.917-4.567 4.77v7.1c0 2.859 1.835 4.78 4.567 4.78h11.865c2.732 0 4.568-1.921 4.568-4.78v-7.1c0-2.853-1.836-4.77-4.567-4.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGifFormat2Bold;
