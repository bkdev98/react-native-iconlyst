import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoscumentLockBulk = ({
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
      d="M19.853 9.418H16.89c-1.766-.009-3.224-1.472-3.224-3.256v-3.14a.445.445 0 0 0-.444-.448H8.066c-2.404 0-4.354 1.98-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.674c2.404 0 4.344-1.96 4.344-4.378V9.857a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.996c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325V6.03c0 1.078.879 1.966 1.946 1.966M10.967 9.61a2.384 2.384 0 0 1 2.383 2.353v.504a2.11 2.11 0 0 1 1.094 1.848v1.536a2.11 2.11 0 0 1-2.11 2.108H9.6a2.11 2.11 0 0 1-2.109-2.108v-1.536c0-.797.442-1.49 1.095-1.848v-.505a2.384 2.384 0 0 1 2.382-2.353m0 1.5a.884.884 0 0 0-.883.868v.229h1.766v-.229a.884.884 0 0 0-.883-.869m-1.51 2.614.046-.01a1 1 0 0 1 .096-.007h2.736a.607.607 0 0 1 .608.608v1.536a.61.61 0 0 1-.608.608H9.599a.61.61 0 0 1-.609-.608v-1.536c0-.287.2-.528.468-.591"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoscumentLockBulk;
