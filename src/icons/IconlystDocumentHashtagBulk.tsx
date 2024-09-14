import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHashtagBulk = ({
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
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966M13.859 13.358h.798a.75.75 0 0 0 0-1.5h-.608l.084-.662a.751.751 0 0 0-1.489-.188l-.107.85h-1.456l.084-.662a.75.75 0 0 0-.65-.838.743.743 0 0 0-.838.65l-.108.85h-.932a.75.75 0 0 0 0 1.5h.742l-.181 1.424H8.38a.75.75 0 0 0 0 1.5h.628l-.084.663a.75.75 0 1 0 1.488.188l.107-.851h1.457l-.084.663a.751.751 0 0 0 1.489.188l.107-.851h.911a.75.75 0 0 0 0-1.5h-.721zm-1.692 1.423H10.71l.18-1.424h1.457z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentHashtagBulk;
