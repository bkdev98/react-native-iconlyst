import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentUploadBold = ({
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
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.879 1.965 1.946 1.965"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.537 12.753a.75.75 0 0 1-1.061-.002l-1.019-1.024v4.109a.75.75 0 1 1-1.5 0v-4.107L8.939 12.75a.749.749 0 1 1-1.062-1.06l2.276-2.285a.75.75 0 0 1 .554-.244h.001a.75.75 0 0 1 .531.22l2.3 2.31a.75.75 0 0 1-.002 1.06m6.313-3.657h-2.963c-1.765-.01-3.223-1.472-3.223-3.255V2.703a.444.444 0 0 0-.443-.45H8.068c-2.403 0-4.352 1.98-4.352 4.397v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.402 0 4.342-1.96 4.342-4.376V9.535a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentUploadBold;
