import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPenBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966M11.479 16.857l3.043-3.318a1.72 1.72 0 0 0-.096-2.427l-.649-.603a1.7 1.7 0 0 0-1.234-.455 1.7 1.7 0 0 0-1.197.553l-3.084 3.365a2.43 2.43 0 0 0-.606 1.364l-.079.73c-.052.482.121.951.474 1.285a1.53 1.53 0 0 0 1.313.398l.704-.118a2.43 2.43 0 0 0 1.411-.774m1.131-5.304c.041 0 .097.01.147.057l.65.604a.22.22 0 0 1 .01.31l-3.05 3.327a.94.94 0 0 1-.547.3l-.75.077.078-.73a.92.92 0 0 1 .226-.52l3.076-3.355a.21.21 0 0 1 .151-.07z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPenBulk;
