import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinWalletTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.625A4.936 4.936 0 0 1 8.436 3.69h8.128A4.936 4.936 0 0 1 21.5 8.625v6.75a4.936 4.936 0 0 1-4.936 4.936h-5.306M5.707 16.219H3.5v3.159h2.275a1.58 1.58 0 0 0 1.572-1.735c-.079-.821-.815-1.424-1.64-1.424"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.707 13.059H3.5v3.159h2.275a1.58 1.58 0 0 0 1.572-1.735c-.079-.821-.815-1.424-1.64-1.424"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.145 20.31v-.931M5.145 13.056v-.931M21.5 14.408h-3.808a2.532 2.532 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.84 11.818h-.01"
    />
  </Svg>
);
export default IconlystBitcoinWalletTwoTone;
