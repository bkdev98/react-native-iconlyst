import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaSquareOutline = ({
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
      d="M16.21 21.75H7.78c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M15.59 15.922c-.19 0-.39-.03-.59-.09-.86-.27-1.46-.99-1.89-1.58-.43-.61-.77-1.26-1.1-1.89v-.02s-.01 0-.02.01c-.33.63-.67 1.28-1.1 1.89-.43.6-1.03 1.31-1.89 1.58-1.08.33-2.15-.27-2.54-1.43-.3-.87-.29-1.9.03-3.13.47-1.86 1.58-3.04 2.96-3.17.93-.08 1.8.39 2.54 1.36l.01-.01c.93-1.22 1.89-1.41 2.53-1.35 1.38.13 2.49 1.31 2.96 3.17.31 1.24.32 2.27.03 3.14-.32.94-1.09 1.52-1.94 1.52zm-2.72-5.12c.16.29.31.57.46.85.32.61.63 1.19 1 1.72.26.37.67.88 1.11 1.02.45.14.65-.41.67-.47.2-.58.18-1.35-.06-2.29s-.8-1.97-1.65-2.05c-.49-.03-.92.4-1.21.78l-.19.24c-.05.06-.09.13-.14.2zm-3.22-1.22h-.07c-.85.08-1.4 1.11-1.64 2.05q-.36 1.41-.06 2.28c.02.06.22.61.67.47.44-.14.84-.65 1.11-1.02.37-.53.68-1.11 1-1.72.15-.28.3-.57.46-.85l-.15-.21-.17-.22c-.28-.37-.7-.79-1.15-.79z"
    />
  </Svg>
);
export default IconlystMetaSquareOutline;