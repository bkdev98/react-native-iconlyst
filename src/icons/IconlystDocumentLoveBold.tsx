import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentLoveBold = ({
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
      d="M14.834 13.997c-.621 1.925-2.972 3.253-3.238 3.398a.75.75 0 0 1-.72-.001c-.268-.147-2.637-1.492-3.236-3.4-.494-1.54.233-3.107 1.656-3.566a2.69 2.69 0 0 1 1.939.132 2.65 2.65 0 0 1 1.945-.132c1.422.459 2.147 2.026 1.654 3.569m5.016-4.901h-2.963c-1.765-.01-3.223-1.472-3.223-3.255V2.703a.445.445 0 0 0-.443-.45H8.068c-2.403 0-4.352 1.98-4.352 4.397v10.506c0 2.534 2.046 4.59 4.554 4.59h7.672c2.402 0 4.342-1.96 4.342-4.376V9.534a.434.434 0 0 0-.434-.438"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.721 11.856a1.15 1.15 0 0 0-1.035.176.75.75 0 0 1-.896.002 1.17 1.17 0 0 0-1.04-.176c-.717.23-.887 1.039-.68 1.682.3.954 1.455 1.862 2.167 2.32.708-.456 1.86-1.361 2.168-2.32.206-.643.036-1.452-.684-1.684M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.879 1.965 1.946 1.965"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentLoveBold;
