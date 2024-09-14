import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Brokencurved = ({
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
      d="M6.864 13.594a5.386 5.386 0 1 0 10.772 0M8.719 4.294A5.37 5.37 0 0 0 6.864 8.36v2.14M17.636 10.502V8.361a5.385 5.385 0 0 0-5.386-5.386M12.25 21.025V18.98M5.473 13.594h13.555M10.758 10.214h2.985M12.751 7.444h-1.003"
    />
  </Svg>
);
export default IconlystVoice2Brokencurved;
