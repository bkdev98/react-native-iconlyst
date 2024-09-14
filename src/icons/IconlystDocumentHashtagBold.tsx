import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHashtagBold = ({
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
      d="M10.71 14.783h1.457l.18-1.424H10.89zM17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.954-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.878 1.966 1.945 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.657 13.359h-.798l-.181 1.424h.721a.75.75 0 0 1 0 1.5h-.911l-.107.85a.75.75 0 0 1-1.489-.187l.084-.663h-1.457l-.107.85a.75.75 0 1 1-1.488-.188l.084-.662H8.38a.75.75 0 0 1 0-1.5h.818l.181-1.424h-.742a.75.75 0 0 1 0-1.5h.932l.108-.85a.743.743 0 0 1 .838-.65.75.75 0 0 1 .65.838l-.084.662h1.456l.107-.85a.751.751 0 0 1 1.489.188l-.084.662h.608a.75.75 0 0 1 0 1.5m5.192-4.263h-2.962c-1.766-.01-3.223-1.472-3.223-3.255V2.7a.445.445 0 0 0-.444-.447H8.067c-2.402 0-4.351 1.978-4.351 4.395v10.506c0 2.534 2.045 4.59 4.554 4.59h7.671c2.403 0 4.343-1.958 4.343-4.375V9.534a.435.435 0 0 0-.435-.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentHashtagBold;
