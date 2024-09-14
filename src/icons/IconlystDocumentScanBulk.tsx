import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentScanBulk = ({
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
      d="M20.814 11.835h-.526V9.533a.435.435 0 0 0-.435-.438H16.89c-1.767-.01-3.225-1.473-3.225-3.257V2.699a.445.445 0 0 0-.444-.449H8.066c-2.403 0-4.353 1.979-4.353 4.397v5.188h-.527a.75.75 0 0 0 0 1.5h17.628a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.018 7.67c.673.007 1.608.01 2.402.007a.465.465 0 0 0 .331-.787L17.82 4.862l-1.956-2.054c-.288-.304-.793-.095-.793.325v2.57c0 1.08.879 1.967 1.947 1.967"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.937 14.5H4.064a.35.35 0 0 0-.351.351v2.307c0 2.535 2.046 4.592 4.556 4.592h7.675c2.404 0 4.344-1.959 4.344-4.377v-2.522a.35.35 0 0 0-.351-.351"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentScanBulk;
