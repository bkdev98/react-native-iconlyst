import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPenBold = ({
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
      d="M12.757 11.608a.21.21 0 0 0-.147-.057h-.009a.21.21 0 0 0-.15.07l-3.077 3.355a.92.92 0 0 0-.226.521l-.079.73.751-.077a.94.94 0 0 0 .546-.3l3.051-3.327a.22.22 0 0 0-.01-.31zM17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.522 13.538-3.043 3.318a2.43 2.43 0 0 1-1.411.774l-.704.118a1.53 1.53 0 0 1-1.313-.398 1.53 1.53 0 0 1-.474-1.286l.079-.73c.055-.51.265-.981.606-1.363l3.084-3.365a1.7 1.7 0 0 1 1.197-.553 1.7 1.7 0 0 1 1.234.455l.649.603a1.72 1.72 0 0 1 .096 2.427m5.328-4.443h-2.963c-1.766-.01-3.223-1.471-3.223-3.255V2.702a.445.445 0 0 0-.443-.448H8.068c-2.403 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.554 4.59h7.672c2.402 0 4.342-1.958 4.342-4.375V9.534a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPenBold;
