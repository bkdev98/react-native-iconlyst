import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardInformationBold = ({
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
      d="M21.154 8.37c.172 0 .31-.146.291-.317-.262-2.423-1.958-4.014-4.41-4.014H6.964c-2.451 0-4.147 1.591-4.41 4.014a.29.29 0 0 0 .292.316zM16.58 13.209h-1.275a.237.237 0 0 0-.24.24v1.25c0 .134.106.239.24.239h1.275a.236.236 0 0 0 .239-.239v-1.25a.237.237 0 0 0-.24-.24"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.319 14.7a1.74 1.74 0 0 1-1.739 1.738h-1.276a1.74 1.74 0 0 1-1.738-1.739v-1.25c0-.96.78-1.74 1.738-1.74h1.276c.959 0 1.739.78 1.739 1.74zm-8.478 1.488H6.428a.75.75 0 0 1 0-1.5h3.413a.75.75 0 1 1 0 1.5M6.428 11.96h2.535a.75.75 0 0 1 0 1.5H6.428a.75.75 0 0 1 0-1.5M2.801 9.87a.3.3 0 0 0-.3.3v5.12c0 2.793 1.794 4.67 4.463 4.67h10.07c2.671 0 4.465-1.877 4.465-4.67v-5.12a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardInformationBold;
