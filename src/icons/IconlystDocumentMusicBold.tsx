import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentMusicBold = ({
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
      d="M9.808 14.101a1.007 1.007 0 1 0 .003 2.013 1.007 1.007 0 0 0-.003-2.013M17.016 7.671c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.879 1.965 1.946 1.965"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.984 11.426a.755.755 0 0 1-.885.585 2.9 2.9 0 0 1-.784-.282v3.379a2.51 2.51 0 0 1-2.507 2.505 2.51 2.51 0 0 1-2.505-2.506A2.51 2.51 0 0 1 9.808 12.6c.359 0 .698.079 1.007.215V9.84a.75.75 0 0 1 1.45-.27c.011.027.338.809 1.133.97a.75.75 0 0 1 .586.886m5.866-2.331h-2.962c-1.766-.01-3.223-1.471-3.223-3.255V2.702a.444.444 0 0 0-.444-.448H8.068c-2.403 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.403 0 4.342-1.96 4.342-4.376V9.534a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentMusicBold;
