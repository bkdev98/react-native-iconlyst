import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleAltTwoTone = ({
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
      d="M19.616 13.02c-.339-5.483-4.374-5.006-5.443-4.717a8.2 8.2 0 0 1-4.346 0c-1.07-.29-5.104-.766-5.443 4.718-.043 5.207 3.311 7.799 4.131 7.89 1.478.36 2.763-.48 3.484-.48.723 0 1.99.783 3.486.48.83-.102 4.172-2.683 4.13-7.89"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12 8.575c0-1.682 1.163-3.597 3.3-4.011M12.271 6.575S12.767 2.984 8.521 3c-.356 4.045 3.75 3.575 3.75 3.575" />
    </G>
  </Svg>
);
export default IconlystAppleAltTwoTone;
