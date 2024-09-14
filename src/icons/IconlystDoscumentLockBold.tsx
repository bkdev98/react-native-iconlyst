import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoscumentLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.996c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325V6.03c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M10.084 11.978a.884.884 0 0 1 1.766 0v.229h-1.766zM9.503 13.715l-.046.008a.61.61 0 0 0-.467.592v1.536c0 .336.273.608.608.608h2.736a.61.61 0 0 0 .61-.608v-1.536a.61.61 0 0 0-.61-.608H9.598a1 1 0 0 0-.095.007"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.89 9.418h2.963c.241 0 .434.195.434.44v7.838c0 2.418-1.94 4.378-4.344 4.378H8.27c-2.51 0-4.557-2.057-4.557-4.592V6.972c0-2.419 1.95-4.398 4.354-4.398h5.155c.251 0 .444.205.444.448v3.14c0 1.784 1.458 3.247 3.224 3.256m-3.54 2.545a2.384 2.384 0 0 0-4.766 0v.503a2.11 2.11 0 0 0-1.094 1.849v1.536c0 1.164.944 2.108 2.108 2.108h2.736a2.11 2.11 0 0 0 2.11-2.108v-1.536c0-.796-.443-1.489-1.094-1.848v-.505"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoscumentLockBold;
