import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale1TwoTone = ({
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
      d="M20.593 15.964c-.392 3.163-1.142 5.014-4.755 5.014H9.162c-3.585 0-4.381-1.85-4.772-5.014l-.848-7.928C3.163 4.812 5.373 3.02 8.315 3.02h8.37c2.942 0 5.152 1.791 4.773 5.015z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.815a4.813 4.813 0 0 0-4.812 4.814h9.626a4.813 4.813 0 0 0-4.813-4.814"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.315 16.902H4.668M12.5 11.628V9.61"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystScale1TwoTone;
