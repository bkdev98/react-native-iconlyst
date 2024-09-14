import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdSearchTwoTone = ({
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
      d="M21.5 11.504V8.58c0-2.44-1.52-4.166-3.965-4.166H7.465C5.028 4.414 3.5 6.14 3.5 8.58v6.588c0 2.442 1.52 4.167 3.965 4.167h4.157"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.713h18M21.05 19.585l-1.583-1.583m0-.002a2.922 2.922 0 1 1-4.132-4.131 2.922 2.922 0 0 1 4.132 4.13"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdSearchTwoTone;
