import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaBroken = ({
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
      d="M12.5 20.794H7.53a4.03 4.03 0 0 1-4.03-4.03v-5.456A4.03 4.03 0 0 1 7.53 7.28h9.942a4.03 4.03 0 0 1 4.028 4.03v5.456a4.03 4.03 0 0 1-4.028 4.029h-1.486M17.05 3.205 12.499 7.28 8.061 3.205"
    />
  </Svg>
);
export default IconlystOldTvAntennaBroken;
