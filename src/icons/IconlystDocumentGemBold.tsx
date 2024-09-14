import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentGemBold = ({
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
      d="M17.016 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.88 1.966 1.946 1.966M9.933 12l-.583 1.04 2.267 2.52 2.267-2.52L13.3 12z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.359 13.645-3.185 3.538a.753.753 0 0 1-1.115 0l-3.184-3.538a.75.75 0 0 1-.097-.87l1.061-1.891a.75.75 0 0 1 .654-.383h4.246c.271 0 .522.146.654.383l1.062 1.892a.75.75 0 0 1-.096.869m4.491-4.55h-2.962c-1.766-.01-3.223-1.471-3.223-3.255V2.702a.445.445 0 0 0-.444-.448H8.068c-2.402 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.403 0 4.342-1.958 4.342-4.375V9.534a.434.434 0 0 0-.434-.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentGemBold;
