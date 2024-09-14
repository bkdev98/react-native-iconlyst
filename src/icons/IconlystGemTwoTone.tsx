import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemTwoTone = ({
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
      d="M12.5 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.465 11.777 3.472 3.814c.302.33.823.33 1.125 0l3.471-3.815a.93.93 0 0 0 .08-1.151l-1.397-2.053a.93.93 0 0 0-.77-.408h-3.89a.93.93 0 0 0-.77.407l-1.401 2.054a.93.93 0 0 0 .08 1.152"
    />
  </Svg>
);
export default IconlystGemTwoTone;
