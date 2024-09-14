import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentTextBold = ({
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
      d="M17.015 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.88 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.221 12.577a.75.75 0 0 1-1.5 0v-.722h-1.444v4.385h.722a.75.75 0 0 1 0 1.5H9.057a.75.75 0 0 1 0-1.5h.72v-4.385H8.336v.722a.75.75 0 0 1-1.5 0v-.981c0-.684.557-1.241 1.24-1.241h4.905c.683 0 1.24.557 1.24 1.24zm5.628-3.482h-2.962c-1.766-.01-3.223-1.471-3.223-3.255V2.702a.444.444 0 0 0-.444-.448H8.068c-2.403 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.045 4.59 4.554 4.59h7.671c2.403 0 4.343-1.96 4.343-4.375V9.534a.435.435 0 0 0-.435-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentTextBold;