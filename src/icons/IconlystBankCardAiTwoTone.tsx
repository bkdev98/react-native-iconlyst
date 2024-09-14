import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.611V8.535c0-2.44-1.52-4.166-3.965-4.166H6.965C4.528 4.37 3 6.094 3 8.535v6.588c0 2.442 1.52 4.167 3.965 4.167h4.08M6.95 9.344h10.098"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 14.09.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225l-.1.274-.102-.274a3.76 3.76 0 0 0-2.221-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.221-2.225zM12.407 13.33a1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystBankCardAiTwoTone;